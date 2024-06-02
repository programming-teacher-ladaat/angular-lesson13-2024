export class Singleton {
    private static instance: Singleton;

    static get Instance() {
        if (!Singleton.instance)
            Singleton.instance = new Singleton('db url');
        return Singleton.instance;
    }

    private constructor(url: string) {
        console.log('connect to url', url);
    }
}

const s1 = Singleton.Instance;
const s2 = Singleton.Instance;
const s3 = Singleton.Instance;