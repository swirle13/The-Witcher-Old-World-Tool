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
    /**
     * Add item to end of queue.
     * @param item Item to add to end of queue.
     */
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
            throw new Error("Queue is empty, you cannot dequeue nothing");
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
/**
 * Abstracted Deck class with functions for interacting, mutating, checking size, and more.
 *
 * @property allItems - Contains all items that are in deck, regardless of state.
 * @property deckQueue - Queue of all items currently available to be drawn from deck.
 * @property removedItems - Array of all items removed from deck, unavailable to be drawn from deck.
 */
class Deck {
    allItems;
    deckQueue = new QueueCollection();
    removedItems;
    constructor(allItems, deckQueueSize) {
        this.allItems = allItems;
        this.deckQueue = new QueueCollection(deckQueueSize);
        this.deckQueue.populate(this.allItems);
        this.deckQueue.shuffle();
        this.removedItems = new Array;
    }
    /**
     * Get size of deck queue.
     * @returns Size of deckQueue.
     */
    size() {
        return this.deckQueue.size();
    }
    /**
     * Add provided item to deck queue, if already member of `this.allItems`. Does not add new item to deck pool.
     * @param item An item already a member of `this.allItems`.
     */
    returnItem(item) {
        if (this.allItems.includes(item)) {
            this.deckQueue.enqueue(item);
        }
        else {
            throw new Error(`Could not add item, ${item}, to deck as ${item} was not a member of this.allItems.`);
        }
    }
    draw() {
        const i = this.deckQueue.dequeue();
        this.removedItems.push(i);
        return i;
    }
    isFull() {
        return this.deckQueue.isFull();
    }
    isEmpty() {
        return this.deckQueue.isEmpty();
    }
    /**
     * Repopulates deckQueue with provided items, if provided, or allItems if no arg is provided.
     * @param items Array of items to repopulate deckQueue. Must be subset of allItems.
     */
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
    /**
     * Shuffles only existing cards in deckQueue.
     */
    shuffle() {
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
 *
 * @property allItems - Contains all items that are in deck, regardless of state.
 * @property deckQueue - Queue of all items currently available to be drawn from deck.
 * @property removedItems - Array of all items removed from deck, unavailable to be drawn from deck.
 */
class ReadonlyDeck extends Deck {
    allItems;
    constructor(allItems) {
        super(allItems);
        this.allItems = allItems;
    }
}
exports.ReadonlyDeck = ReadonlyDeck;
/**
 * Extension of Deck class but with allItems restricted to protected. Allows modifying decks that can have items added
 * and removed, e.g. player's deck, player's hand, etc.
 *
 * @property allItems - Contains all items that are in deck, regardless of state.
 * @property deckQueue - Queue of all items currently available to be drawn from deck.
 * @property removedItems - Array of all items removed from deck, unavailable to be drawn from deck.
 */
class MutableDeck extends Deck {
    allItems;
    constructor(allItems) {
        super(allItems);
        this.allItems = allItems;
    }
    /**
     * Add given list of item(s) to allItems, increasing total deck contents.
     * @param items {Array<T>} List of items to add to total deck contents.
     */
    addToAllItems(items) {
        try {
            items.forEach(item => {
                this.allItems.push(item);
            });
        }
        catch (error) {
            throw new Error(`Couldn't add to allItems: ${error}`);
        }
    }
}
exports.MutableDeck = MutableDeck;
