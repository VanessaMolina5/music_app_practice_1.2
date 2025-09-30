import createPlaylist from "../../playlist";
import audioController from "../audioController";

export default{
    _progress_bar:document.getElementById("progress"),
    _play_btn:document.getElementById("play"),
    _last_btn:document.getElementById("lastest"),
    _forward_btn:document.getElementById("forward"),
    _forwd_btn:document.getElementById("forward"),
    _audioController:audioController,
    _interface:interface_data,
    PLayer(songs){
        this._progress_bar.max=100;
        this._progress_bar.value=0;
        const media_controller=document.getElementById("media");
        const playlist=createPlaylist(sessionStorage,null);
        this._audioController.AudioController(null,media_controller);
        
    },
    eventListeners(){
        this._audioController._controller.addEventListener('timeupdate', function(){
            progress_value=(this.PLayer._audioController._controller.currentTime/PLayer._audioController.duration);    
            PLayer._progress_bar.value=progress_value;
        });
        this._progress_bar_addEventListener('input',function(){
            player._audioController._controller.currentTime=
            player._audioController._controller.duration*(this.value/100);
        });
        this._forwd_btn.addEventListener('click',function(){
            audioController.nextSon();
        })
        this._last_btn.addEventListener('click',function(){
            audioController.prevSong();
        });
        this._play_btn.addEventListener('click',function(){
            Player._audioController.playPause(event.target.classList[0]);
        });
        this._audioController._controller.addEventListener('loadedmetadata',function(){
            player._progress_bar.value=0;
        });
}
}
