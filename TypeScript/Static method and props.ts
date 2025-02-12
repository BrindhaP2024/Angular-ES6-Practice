class MathUtils {
    // Static property
    static PI: number = 3.141592653589793;
  
    // Static method
    static circumference(radius: number): number {
      return 2 * MathUtils.PI * radius;
    }
  
    // Another static method
    static area(radius: number): number {
      return MathUtils.PI * radius * radius;
    }
  }
  
  // Access static property
  console.log(MathUtils.PI); // Outputs: 3.141592653589793
  
  // Call static methods
  console.log(MathUtils.circumference(10)); // Outputs: 62.83185307179586
  console.log(MathUtils.area(10)); // Outputs: 314.1592653589793
  