import java.util.ArrayList;
import java.util.Scanner;



public class App {
    public static void main(String[] args) throws Exception {

        ArrayList<String> backpack = new ArrayList<String>();

        while (true) {
            // Интерактив - вводим данные
            System.out.println("---------------------");
            System.out.println("Choose: 'add', 'remove', 'show', 'exit': ");
            System.out.println("Write only in that same text and register: ");
            System.out.println("---------------------");
            
            Scanner scan = new Scanner(System.in);
            String userInput = scan.nextLine();
            
            


            // Добовляем адд через ИгнорКейс, что бы не заамечали регистр 
             if (userInput.equalsIgnoreCase("add")) {
                 Scanner newItem = new Scanner(System.in);
                 System.out.print("Enter your item to backpack: ");
                 String itemToAdd = newItem.next();
                 backpack.add(itemToAdd); 
                 System.out.println("Your item '" + itemToAdd + "' was successfully added!"); // Добовляем динамически itemToAdd в строку
}  else if (userInput.equalsIgnoreCase("remove")) {
                System.out.print("Enter an item to remove from the backpack: ");
                String itemToRemove = scan.nextLine();
                // с помощью цыкла проходим и убираем первый элемент (в задании не сказано какой именно нужно убирать жлемент и сколько, поэтому будут все)
                boolean removed = false;
                for (int i = 0; i < backpack.size(); i++) {
                    if (backpack.get(i).equals(itemToRemove)) {
                        backpack.remove(i);
                        removed = true;
                        System.out.println("'" + itemToRemove + "' has been removed from the backpack.");
                        break;
                    }
                }
            
                if (!removed) {
                    System.out.println("'" + itemToRemove + "' was not found in the backpack.");
                }
            } else if (userInput.equalsIgnoreCase("show")) {
                System.out.println("Backpack contents: " + backpack);
            } else if (userInput.equalsIgnoreCase("exit")) {
                break;
            }
        }

    }
}