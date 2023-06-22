"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutableDeck = exports.ReadonlyDeck = exports.StackCollection = exports.QueueCollection = void 0;
class Collection {
    storage = [];
    size() {
        return this.storage.length;
    }
}
class QueueCollection extends Collection {
    capacity;
    constructor(capacity = Infinity) {
        super();
        this.capacity = capacity;
    }
    enqueue(item) {
        if (this.isFull()) {
            throw Error("Queue has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }
    /**
     * Can't actually return undefined as it will throw an error if trying to pop when empty.
     * @returns The object of type <T> that was removed from the queue.
     */
    dequeue() {
        if (this.isEmpty()) {
            throw Error("Queue is empty, you cannot dequeue nothing");
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.storage.shift();
    }
    isFull() {
        return this.capacity === this.size();
    }
    isEmpty() {
        return 0 === this.size();
    }
    populate(arr) {
        if (!this.isEmpty()) {
            this.empty();
        }
        arr.forEach(element => {
            this.storage.push(element);
        });
    }
    empty() {
        this.storage = [];
    }
    shuffle() {
        for (let i = 0; i < this.size(); i++) {
            const r = i + (Math.floor(Math.random() * (this.size() - i)));
            const temp = this.storage[i];
            this.storage[i] = this.storage[r];
            this.storage[r] = temp;
        }
    }
    peek() {
        return this.storage[0];
    }
    lookAtQueue() {
        return this.storage;
    }
}
exports.QueueCollection = QueueCollection;
class StackCollection extends Collection {
    capacity;
    constructor(capacity = Infinity) {
        super();
        this.capacity = capacity;
    }
    push(item) {
        if (this.isFull()) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        // In the derived class, we can access protected properties of the abstract class
        this.storage.push(item);
    }
    pop() {
        return this.storage.pop();
    }
    peek() {
        return this.storage[this.size() - 1];
    }
    // Implementation of the abstract method
    isFull() {
        return this.capacity === this.size();
    }
    isEmpty() {
        return 0 === this.size();
    }
}
exports.StackCollection = StackCollection;
class Deck {
    allItems;
    deckQueue = new QueueCollection();
    constructor(allItems, deckQueueSize) {
        this.allItems = allItems;
        this.deckQueue = new QueueCollection(deckQueueSize);
        this.deckQueue.populate(this.allItems);
        this.deckQueue.shuffle();
    }
    size() {
        return this.deckQueue.size();
    }
    /**
     * Add given, existing item to deck queue. Does not add new item to deck pool.
     * @param item An item already a member of this.allItems.
     */
    addItem(item) {
        if (this.allItems.includes(item)) {
            this.deckQueue.enqueue(item);
        }
        else {
            throw new Error(`Could not add item, ${item}, to deck as ${item} was not a member of this.allItems.`);
        }
    }
    draw() {
        return this.deckQueue.dequeue();
    }
    isFull() {
        return this.deckQueue.isFull();
    }
    isEmpty() {
        return this.deckQueue.isEmpty();
    }
    repopulate(items) {
        if (items) {
            const set = new Set(this.allItems);
            if (items.every(x => set.has(x))) {
                this.deckQueue.populate(items);
            }
            else {
                throw new Error(`Could not add items, ${items}, to deck as ${items} were not members of this.allItems.`);
            }
        }
        else {
            this.deckQueue.populate(this.allItems);
        }
        this.deckQueue.shuffle();
    }
    shuffle() {
        // shuffles only existing cards in deck
        this.deckQueue.shuffle();
    }
    peek() {
        return this.deckQueue.peek();
    }
    lookAtQueue() {
        return this.deckQueue.lookAtQueue();
    }
}
exports.default = Deck;
/**
 * Extension of Deck class but with allItems restricted to readonly. Useful for preventing
 * accidentally modifying decks that should never have more items added, e.g. exploration decks, quests,
 */
class ReadonlyDeck extends Deck {
    allItems;
    constructor(allItems) {
        super(allItems);
        this.allItems = allItems;
    }
}
exports.ReadonlyDeck = ReadonlyDeck;
class MutableDeck extends Deck {
    allItems;
    constructor(allItems) {
        super(allItems);
        this.allItems = allItems;
    }
    addToAllItems(items) {
        if (items instanceof Array) {
            items.forEach(item => {
                this.allItems.push(item);
            });
        }
        else {
            this.allItems.push(items);
        }
    }
}
exports.MutableDeck = MutableDeck;
