// Generic Function
function identity<T>(arg: T): T {
    return arg;
  }
  
  console.log(identity<string>('hello')); // Outputs: hello
  console.log(identity<number>(42)); // Outputs: 42
  
  // Generic Class
  class GenericStorage<T> {
    private items: T[] = [];
  
    addItem(item: T): void {
      this.items.push(item);
    }
  
    getItems(): T[] {
      return this.items;
    }
  }
  
  // Create an instance for storing numbers
  const numberStorage = new GenericStorage<number>();
  numberStorage.addItem(10);
  numberStorage.addItem(20);
  console.log(numberStorage.getItems()); 
  
  // Create an instance for storing strings
  const stringStorage = new GenericStorage<string>();
  stringStorage.addItem('Hello');
  stringStorage.addItem('World');
  console.log(stringStorage.getItems());
  
  // Generic Interface
  interface Pair<K, V> {
    key: K;
    value: V;
  }
  
  function createPair<K, V>(key: K, value: V): Pair<K, V> {
    return { key, value };
  }
  
  const numberStringPair = createPair<number, string>(1, 'One');
  console.log(numberStringPair); // Outputs: { key: 1, value: 'One' }
  
  const stringBooleanPair = createPair<string, boolean>('isAdmin', true);
  console.log(stringBooleanPair); // Outputs: { key: 'isAdmin', value: true }
  