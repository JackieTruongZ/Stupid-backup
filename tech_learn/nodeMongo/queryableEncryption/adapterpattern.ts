interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
    forward(): void;
}

interface AdvancedMediaPlayer {
    playVlc(): void;
    playMp4(): void;
}

class BasicMediaPlayer implements MediaPlayer {
    play(): void {
        console.log('Basic media player: play');
    }

    pause(): void {
        console.log('Basic media player: pause');
    }

    stop(): void {
        console.log('Basic media player: stop');
    }

    forward(): void {
        console.log('Basic media player: forward');
    }
}

class VlcPlayer implements AdvancedMediaPlayer {
    playVlc(): void {
        console.log('VLC player: play VLC file');
    }

    playMp4(): void {
        // Do nothing
    }
}

class Mp4Player implements AdvancedMediaPlayer {
    playVlc(): void {
        // Do nothing
    }

    playMp4(): void {
        console.log('MP4 player: play MP4 file');
    }
}


class MediaAdapter implements MediaPlayer {
    private advancedMediaPlayer: AdvancedMediaPlayer;

    constructor(advancedMediaPlayer: AdvancedMediaPlayer) {
        this.advancedMediaPlayer = advancedMediaPlayer;
    }

    play(): void {
        this.advancedMediaPlayer.playMp4();
    }

    pause(): void {
        // Do nothing
    }

    stop(): void {
        // Do nothing
    }

    forward(): void {
        // Do nothing
    }
}

const mediaPlayer: MediaPlayer = new BasicMediaPlayer();
mediaPlayer.play(); // Basic media player: play
mediaPlayer.pause(); // Basic media player: pause

const advancedMediaPlayer: AdvancedMediaPlayer = new Mp4Player();
const mediaAdapter: MediaPlayer = new MediaAdapter(advancedMediaPlayer);
mediaAdapter.play(); // MP4 player: play MP4 file
mediaAdapter.pause(); // Do nothing



