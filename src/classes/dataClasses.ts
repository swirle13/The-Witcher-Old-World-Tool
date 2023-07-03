// Interface, abstract, and collection generic classes taken from https://dev.to/glebirovich/typescript-data-structures-stack-and-queue-hld
interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    size(): number;
}

interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}

abstract class Collection<T> {
    protected storage: Array<T> = [];

    size(): number {
        return this.storage.length;
    }
    abstract isFull(): boolean;
    abstract isEmpty(): boolean;
}

class QueueCollection<T> extends Collection<T> implements IQueue<T> {
    constructor(private capacity: number = Infinity) {
        super();
    }

    /**
     * Add item to end of queue.
     * @param item Item to add to end of queue.
     */
    enqueue(item: T): void {
        if (this.isFull()) {
            throw Error("Queue has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }

    /**
     * Can't actually return undefined as it will throw an error if trying to pop when empty.
     * @returns The object of type <T> that was removed from the queue.
     */
    dequeue(): T {
        if (this.isEmpty()) {
            throw new Error("Queue is empty, you cannot dequeue nothing");
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.storage.shift()!;
    }

    isFull(): boolean {
        return this.capacity === this.size();
    }

    isEmpty(): boolean {
        return 0 === this.size();
    }

    populate(arr: ReadonlyArray<T>): void {
        if (!this.isEmpty()) {
            this.empty();
        }
        arr.forEach(element => {
            this.storage.push(element);
        });
    }

    empty(): void {
        this.storage = [];
    }

    shuffle(): void {
        for (let i = 0; i < this.size(); i++) {
            const r: number = i + (Math.floor(Math.random() * (this.size() - i)));
            const temp: T = this.storage[i];
            this.storage[i] = this.storage[r];
            this.storage[r] = temp;
        }
    }

    peek(): T {
        return this.storage[0];
    }

    lookAtQueue(): Array<T> {
        return this.storage;
    }
}

class StackCollection<T> extends Collection<T> implements IStack<T> {
    constructor(private capacity: number = Infinity) {
        super();
    }

    push(item: T) {
        if (this.isFull()) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        // In the derived class, we can access protected properties of the abstract class
        this.storage.push(item);
    }

    pop(): T | undefined {
        return this.storage.pop();
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    // Implementation of the abstract method
    isFull(): boolean {
        return this.capacity === this.size();
    }

    isEmpty(): boolean {
        return 0 === this.size();
    }
}

/**
 * Abstracted Deck class with functions for interacting, mutating, checking size, and more.
 * 
 * @property allItems - Contains all items that are in deck, regardless of state.
 * @property deckQueue - Queue of all items currently available to be drawn from deck.
 * @property removedItems - Array of all items removed from deck, unavailable to be drawn from deck.
 */
export default abstract class Deck<T> {
    protected allItems: ReadonlyArray<T>;
    protected deckQueue: QueueCollection<T> = new QueueCollection<T>();
    protected removedItems: Array<T>;

    constructor(allItems: ReadonlyArray<T>, deckQueueSize?: number) {
        this.allItems = allItems;
        this.deckQueue = new QueueCollection<T>(deckQueueSize);
        this.deckQueue.populate(this.allItems);
        this.deckQueue.shuffle();
        this.removedItems = new Array<T>;
    }

    /**
     * Get size of deck queue.
     * @returns Size of deckQueue.
     */
    size(): number {
        return this.deckQueue.size();
    }

    /**
     * Add provided item to deck queue, if already member of `this.allItems`. Does not add new item to deck pool.
     * @param item An item already a member of `this.allItems`.
     */
    returnItem(item: T): void {
        if (this.allItems.includes(item)) {
            this.deckQueue.enqueue(item);
        } else {
            throw new Error(`Could not add item, ${item}, to deck as ${item} was not a member of this.allItems.`);
        }
    }

    draw(): T {
        const i = this.deckQueue.dequeue();
        this.removedItems.push(i);
        return i;
    }

    isFull(): boolean {
        return this.deckQueue.isFull();
    }

    isEmpty(): boolean {
        return this.deckQueue.isEmpty();
    }

    /**
     * Repopulates deckQueue with provided items, if provided, or allItems if no arg is provided.
     * @param items Array of items to repopulate deckQueue. Must be subset of allItems.
     */
    repopulate(items?: Array<T>): void {
        if (items) {
            const set = new Set(this.allItems);
            if (items.every(x => set.has(x))) {
                this.deckQueue.populate(items);
            } else {
                throw new Error(`Could not add items, ${items}, to deck as ${items} were not members of this.allItems.`);
            }
        } else {
            this.deckQueue.populate(this.allItems);
        }
        this.deckQueue.shuffle();
    }

    /**
     * Shuffles only existing cards in deckQueue.
     */
    shuffle(): void {
        this.deckQueue.shuffle();
    }

    peek(): T {
        return this.deckQueue.peek();
    }

    lookAtQueue(): Array<T> {
        return this.deckQueue.lookAtQueue();
    }
}

/**
 * Extension of Deck class but with allItems restricted to readonly. Useful for preventing
 * accidentally modifying decks that should never have more items added, e.g. exploration decks, quests,
 * 
 * @property allItems - Contains all items that are in deck, regardless of state.
 * @property deckQueue - Queue of all items currently available to be drawn from deck.
 * @property removedItems - Array of all items removed from deck, unavailable to be drawn from deck.
 */
class ReadonlyDeck<T> extends Deck<T> {
    protected readonly allItems: ReadonlyArray<T>;

    constructor(allItems: ReadonlyArray<T>) {
        super(allItems);
        this.allItems = allItems;
    }
}

/**
 * Extension of Deck class but with allItems restricted to protected. Allows modifying decks that can have items added
 * and removed, e.g. player's deck, player's hand, etc.
 * 
 * @property allItems - Contains all items that are in deck, regardless of state.
 * @property deckQueue - Queue of all items currently available to be drawn from deck.
 * @property removedItems - Array of all items removed from deck, unavailable to be drawn from deck.
 */
class MutableDeck<T> extends Deck<T> {
    protected allItems: Array<T>;

    constructor(allItems: Array<T>) {
        super(allItems);
        this.allItems = allItems;
    }

    /**
     * Add given list of item(s) to allItems, increasing total deck contents.
     * @param items {Array<T>} List of items to add to total deck contents.
     */
    addToAllItems(items: Array<T>): void {
        try {
            items.forEach(item => {
                this.allItems.push(item);
            });
        } catch (error) {
            throw new Error(`Couldn't add to allItems: ${error}`);
        }
    }
}

/*
what decks can have items added to it?
    * Player Hand
    * Player Trophies
    * 
What decks cannot have items added to it?
    * Monster deck (can only be repopulated from discarded cards when exhausted)
    * Explore cards: City and Wilds
    * Terrain tokens
    * Quest deck
*/

export { QueueCollection, StackCollection, ReadonlyDeck, MutableDeck };
