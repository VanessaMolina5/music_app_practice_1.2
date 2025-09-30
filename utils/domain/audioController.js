export default{
    AudioController(playlist){
        
        this.netxSongs=playlist;
        this.actualSong=this.nextSongs.pop();
    },
    _lastSongs:[],
    _nextSongs:[],
    _actualSong:null,
    _controller: document.getElementByid("media"),
    nextSon(){
     if(this._nextSongs.length!==0){
        this._lastSongs.push(this._actualSong);
        this._actualSong=this._nextSongs.pop();
    }

},
loadSong(){
    this._controller.src=this._actualSong.url;
},
prevSong(){
    if(this._lastSongs.length!==0){
        this._nextSongs.push(this._actualSong);
        this._actualSong=this._lastSongs.pop();
    }
},
playPause(){
    if (action=='play'){
    this._controller.play();
    }
}
    
}
