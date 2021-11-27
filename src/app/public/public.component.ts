import { Component, OnInit, HostListener } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Pipe, PipeTransform } from "@angular/core";

@Component({
  selector: "app-public",
  templateUrl: "./public.component.html",
  styleUrls: ["./public.component.scss"],
})
export class PublicComponent implements OnInit {
  private participantTimerVal: number;
  private playingParticipantIndex: number;
  private scrumInterval: any;
  private startTime: number;
  private participantTimer: any;
  private participantTimerMax: number;

  public scrumStarted: boolean;
  public participantName: string;
  public runningParticipantName: string;
  public hideParticipantsNameIconButton: string;
  public participantTime: number;
  public overallScrumTime: number;
  public participantCounter: number;
  public playSound: boolean;
  public addParticipant: boolean;
  public shouldShowParticipantsNames: boolean;
  public isPlayDisabled: boolean;
  public showError: boolean;
  public isRandomButtonDisabled: boolean;
  public participants: any;

  constructor() {
    this.scrumStarted = false;
    this.participantTimerVal = 0;
    this.isRandomButtonDisabled = false;
    this.playingParticipantIndex = 0;
    this.startTime = new Date().getTime();

    this.participantName = "";
    this.participantTime = 1;
    this.participantTimerMax = 60 * this.participantTime;
    this.playSound = true;
    this.addParticipant = false;
    this.shouldShowParticipantsNames = true;
    this.hideParticipantsNameIconButton = "pi pi-eye-slash";
    this.isPlayDisabled = false;
    this.showError = false;
    this.overallScrumTime = 0;
    this.runningParticipantName = "";
    this.participantCounter = this.participantTimerMax;
  }

  @HostListener("document:keyup", ["$event"]) handleKeyboardEvent(
    event: KeyboardEvent
  ) {
    if (this.participantName == "") {
      switch (event.key) {
        case " ":
          this.isPlayDisabled ? this.pause() : this.play();
          break;
        case "Enter":
          (this.isPlayDisabled && this.runningParticipantName == "Alinhamentos") 
          ? this.finish() 
          : (this.scrumStarted && this.isPlayDisabled) ? this.participantDone() : null;
          break;
        default:
          break;
      }
    }
  }

  public ngOnInit(): void {
    this.retrieveParticipantsFromLocalStorage();
  }

  public dropFunction(event: CdkDragDrop<string[]>): void {
    if (!this.isPlayDisabled) {
      moveItemInArray(
        this.participants,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  public onKeydownOnAddParticipant(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      this.addParticipants();
    };
  }

  public addParticipants(): void {
    if (this.participantName.trim()) {
      this.showError = false;
      this.participants.push({ name: this.participantName, status: "pending" });
      this.saveParticipantsOnLocalStorage();
      this.participantName = "";
    } else {
      this.showError = true;
    }
  }

  public deleteParticipant(i: number): void {
    this.participants.splice(i, 1);
    this.saveParticipantsOnLocalStorage();
  }

  public onTimeChange(): void {
    this.participantTimerMax = 60 * this.participantTime;
    this.participantCounter = this.participantTimerMax;
  }

  public play(): void {
    const showTimerError = this.setShowTimerError();
    if (this.participants.length > 0 && showTimerError) {
      this.isPlayDisabled = true;
      this.isRandomButtonDisabled = true;
      if (!this.scrumStarted) {
        this.playAudio();
        this.scrumStarted = true;
        this.startTime = new Date().getTime();
        this.scrumInterval = setInterval(() => {
          var diff = (new Date().getTime() - this.startTime) / 1000;
          diff = Math.floor(diff);
          this.overallScrumTime = diff;
        }, 1000);
        this.changeParticipant();
      } else {
        var self = this;
        this.participantTimer = setInterval(function () {
          self.participantTimerVal += 1;
          self.participantCounter =
            self.participantTimerMax - self.participantTimerVal;
          if (self.participantCounter <= 0) {
            clearInterval(self.participantTimer);
            var p = self.participants[self.playingParticipantIndex];
            p.status = "played";
            self.playingParticipantIndex += 1;
            if (self.playingParticipantIndex < self.participants.length) {
              self.changeParticipant();
            } else {
              self.playAudio();
              self.runningParticipantName = "Alinhamentos";
            }
          }
        }, 1000);
      }
    }
  }

  public pause(): void {
    this.isPlayDisabled = false;
    clearInterval(this.participantTimer);
  }

  public reset(): void {
    clearInterval(this.participantTimer);
    this.overallScrumTime = 0;
    this.scrumStarted = false;
        clearInterval(this.scrumInterval);
        this.participants.forEach(function (p: any) {
          p.status = "pending";
        });
        this.runningParticipantName = "";
        this.isPlayDisabled = false;
        this.isRandomButtonDisabled = false;
        this.playingParticipantIndex = 0;
        this.participantTimerVal = 0;
        this.participantCounter = this.participantTimerMax;
  }

  public finish(): void {
    this.playAudio();
    this.scrumStarted = false;
    clearInterval(this.scrumInterval);
    this.participants.forEach(function (p: any) {
      p.status = "pending";
    });
    this.runningParticipantName = "";
    this.isPlayDisabled = false;
    this.isRandomButtonDisabled = false;
    this.playingParticipantIndex = 0;
    this.participantTimerVal = 0;
    this.participantCounter = this.participantTimerMax;
  }

  public participantDone(): void {
    clearInterval(this.participantTimer);
    this.participants[this.playingParticipantIndex].status = "played";
    this.playingParticipantIndex += 1;
    if (this.playingParticipantIndex < this.participants.length) {
      this.changeParticipant();
    } else {
      this.playAudio();
      this.runningParticipantName = "Alinhamentos";
    }
  }

  public randomizeParticipants(): void {
    for (var i = this.participants.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.participants[i];
      this.participants[i] = this.participants[j];
      this.participants[j] = temp;
    }
    this.saveParticipantsOnLocalStorage();
  }

  public hideParticipants(): void {
    this.shouldShowParticipantsNames = !this.shouldShowParticipantsNames;
    if(this.hideParticipantsNameIconButton == "pi pi-eye-slash"){
      this.hideParticipantsNameIconButton = "pi pi-eye";
    } else{
      this.hideParticipantsNameIconButton = "pi pi-eye-slash"
    }
  }

  public setShowTimerError(): boolean {
    return (this.participantTime >= 0.5 && this.participantTime <=3);
  }

  private saveParticipantsOnLocalStorage(): void {
    localStorage.setItem("participants", JSON.stringify(this.participants));
  }

  private retrieveParticipantsFromLocalStorage(): void {
    this.participants = JSON.parse(localStorage.getItem("participants") || '[]')
  }

  private playAudio(): void {
    if (this.playSound) {
      let audio = new Audio();
      this.runningParticipantName == "Alinhamentos" ? (audio.src = "assets/lets-go-team.mp3") : (audio.src = "assets/horn.mp3");
      audio.load();
      audio.volume = 0.1;
      audio.play();
    }
  }

  private changeParticipant(): void {
    this.participantTimerVal = 0;
    this.participantCounter = this.participantTimerMax;
    var p = this.participants[this.playingParticipantIndex];
    this.runningParticipantName = p.name;
    p.status = "playing";
    var self = this;
    this.participantTimer = setInterval(function () {
      self.participantTimerVal += 1;
      self.participantCounter =
        self.participantTimerMax - self.participantTimerVal;
      if (self.participantCounter <= 0) {
        clearInterval(self.participantTimer);
        p.status = "played";
        self.playingParticipantIndex += 1;
        if (self.playingParticipantIndex < self.participants.length) {
          self.changeParticipant();
        } else {
          self.playAudio();
          self.runningParticipantName = "Alinhamentos";
        }
      }
    }, 1000);
  }
}
@Pipe({
  name: "formatTime",
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor((value % 3600) / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}
