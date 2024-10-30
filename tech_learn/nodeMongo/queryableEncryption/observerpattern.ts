interface Tweet {

}

interface IObserver {
    onTweet(tweet: Tweet): string
}


interface IObservable {

    sendTweet(tweet: Tweet): any
}

interface Follower {
    onTweet(data: any);
}

class Author implements IObservable {

    protected observers: Follower[] = []

    notify(tweet: Tweet) {
        this.observers.forEach(observer => {
            observer.onTweet(tweet)
        })
    }

    subscribe(observer: Follower) {
        this.observers.push(observer)
    }

    sendTweet(tweet: Tweet) {
        this.notify(tweet)
    }
}