/*
    1. Abstract Method:
        - Abstract method là phương thức không có triển khai (implementation) trong lớp chứa nó, 
        mà chỉ có định nghĩa phương thức.
        - Lớp chứa abstract method phải là một lớp trừu tượng (abstract class) và chúng ta không 
        thể tạo một đối tượng trực tiếp từ lớp đó.
        - Lớp con kế thừa từ lớp chứa abstract method phải triển khai (implement) tất cả các abstract 
        method bằng cách định nghĩa lại chúng trong lớp con.
        - Abstract method được sử dụng khi chúng ta muốn định nghĩa một phương thức chung trong lớp cha, 
        nhưng không cung cấp triển khai cụ thể cho phương thức đó, để để lớp con kế thừa và triển khai 
        theo nhu cầu riêng của từng lớp con.
 */
        abstract class Animal {
            abstract makeSound(): void;
        }
          
          class Dog extends Animal {
            makeSound(): void {
              console.log("Woof!");
            }
        }
          
          class Cat extends Animal {
            makeSound(): void {
              console.log("Meow!");
            }
        }
          
        const dog = new Dog();
        dog.makeSound(); // Output: Woof!
          
        const cat = new Cat();
        cat.makeSound(); // Output: Meow!

/*
    2. Method:
        - Method là phương thức có triển khai (implementation) đầy đủ trong lớp chứa nó.
        - Method có thể được gọi trực tiếp từ đối tượng của lớp đó hoặc thông qua kế thừa từ lớp cha.
        - Method được sử dụng khi chúng ta muốn định nghĩa và triển khai một phương thức cụ thể trong một lớp.
 */
        class MathUtils {
            static add(a: number, b: number): number {
              return a + b;
            }
          
            static multiply(a: number, b: number): number {
              return a * b;
            }
        }
          
        console.log(MathUtils.add(2, 3)); // Output: 5
        console.log(MathUtils.multiply(2, 3)); // Output: 6