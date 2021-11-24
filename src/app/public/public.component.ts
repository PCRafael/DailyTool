import { Component, OnInit, HostListener } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Pipe, PipeTransform } from "@angular/core";

@Component({
  selector: "app-public",
  templateUrl: "./public.component.html",
  styleUrls: ["./public.component.scss"],
})
export class PublicComponent implements OnInit {
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

  constructor() {}

  scrumStarted: boolean = false;
  participantName: string = "";
  participants: any = [];
  participantTime: number = 1;
  playSound: boolean = true;
  addParticipant: boolean = false;

  isPlayDisabled: boolean = false;
  showError: boolean = false;
  startTime: any;
  overallScrumTime: number = 0;
  scrumInterval: any;
  isRandomButtonDisabled: boolean = false;

  //Participant Timer
  playingParticipantIndex = 0;
  runningParticipantName: string = "";
  participantTimer: any;
  participantTimerMax = 60 * this.participantTime;
  participantTimerVal = 0;
  participantCounter = this.participantTimerMax;

  ngOnInit(): void {
    this.retrieveParticipantsFromLocalStorage();
  }

  dropFunction(event: CdkDragDrop<string[]>) {
    if (!this.isPlayDisabled) {
      moveItemInArray(
        this.participants,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  saveParticipantsOnLocalStorage(): void {
    localStorage.setItem("participants", JSON.stringify(this.participants));
  }

  retrieveParticipantsFromLocalStorage(): void {
    this.participants = JSON.parse(localStorage.getItem("participants") || '[]')
  }

  onKeydownOnAddParticipant(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      this.addParticipants();
    };
  }

  addParticipants() {
    if (this.participantName.trim() && this.participantTime >= 0.5 && this.participantTime <=3) {
      this.showError = false;
      this.participants.push({ name: this.participantName, status: "pending" });
      this.saveParticipantsOnLocalStorage();
      this.participantName = "";
    } else {
      this.showError = true;
    }
  }

  deleteParticipant(i: number) {
    this.participants.splice(i, 1);
    this.saveParticipantsOnLocalStorage();
  }

  onTimeChange() {
        this.participantTimerMax = 60 * this.participantTime;
        this.participantCounter = this.participantTimerMax;
  }

  play() {
    if (this.participants.length > 0) {
      this.playAudio();
      this.isPlayDisabled = true;
      this.isRandomButtonDisabled = true;
      if (!this.scrumStarted) {
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

  changeParticipant() {
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

  pause() {
    this.isPlayDisabled = false;
    clearInterval(this.participantTimer);
  }

  reset() {
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

  finish() {
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

  participantDone() {
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

  playAudio() {
    if (this.playSound) {
      let audio = new Audio();
      this.runningParticipantName == "Alinhamentos" ? (audio.src = "assets/lets-go-team.mp3") : (audio.src = "assets/horn.mp3");
      audio.load();
      audio.volume = 0.1;
      audio.play();
    }
  }

  randomizeParticipants() {
    for (var i = this.participants.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.participants[i];
      this.participants[i] = this.participants[j];
      this.participants[j] = temp;
    }
    this.saveParticipantsOnLocalStorage();
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
