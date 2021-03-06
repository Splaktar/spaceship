import {NavController, NavParams, Page} from 'ionic/ionic';
import {SessionDetail} from '../session-detail/session-detail';
import {DataService} from '../service/data';

@Page({
  templateUrl: 'app/speaker-detail/speaker-detail.html'
})
export class SpeakerDetail {
  constructor(nav:NavController, navParams:NavParams, dataService:DataService) {
    this.nav = nav;
    this.navParams = navParams;
    this.dataService = dataService;

    let speakerName = this.navParams.data;
    let speakerList = this.dataService.getSpeakers();

    this.speaker = speakerList.find((v) => {
      return v.name.toLowerCase().indexOf(speakerName.toLowerCase()) >= 0;
    });
  }

  openSession(session) {
    this.nav.push(SessionDetail, session);
  }
}
