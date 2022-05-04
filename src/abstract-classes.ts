abstract class Animal {
  constructor(public name: string) {}

  abstract describe(): void;
}

class Bird extends Animal {
  constructor(name: string) {
    super(name);
  }

  describe(): void {
    console.log(`${this.name} is a bird`);
  }
}

class ZooKeeper extends Animal {
  private static instance: ZooKeeper;
  private constructor(name: string) {
    super(name);
  }

  static getInstance(name: string) {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ZooKeeper(name);
    return this.instance;
  }

  describe(): void {
    console.log(`${this.name} is a zoo keeper`);
  }
}

const feathers = new Bird('Feathers');
feathers.describe();

// const billy = new ZooKeeper();
const zookeeper = ZooKeeper.getInstance('Billy');
zookeeper.describe();
