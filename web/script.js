// Interface Segregation Principle in action

    // Chat interface
    class ChatInterface {
        constructor() {
          if (this.constructor === ChatInterface) {
            throw new Error("ChatInterface cannot be instantiated.");
          }
        }
  
        showMessage(message) {
          throw new Error("Method 'showMessage' must be implemented for ChatInterface.");
        }
      }
  
      // Weather interface
      class WeatherInterface {
        constructor() {
          if (this.constructor === WeatherInterface) {
            throw new Error("WeatherInterface cannot be instantiated.");
          }
        }
  
        displayWeather() {
          throw  Error("Method 'displayWeather' must be implemented for WeatherInterface.");
        }
      }
  
      // Calendar interface
      class CalendarInterface {
        constructor() {
          if (this.constructor === CalendarInterface) {
            throw new Error("CalendarInterface cannot be instantiated.");
          }
        }
  
        showEvents() {
          throw Error("Method 'showEvents' must be implemented for CalendarInterface.");
        }
      }
  
      // TodoList interface
      class TodoListInterface {
        constructor() {
          if (this.constructor === TodoListInterface) {
            throw new Error("TodoListInterface cannot be instantiated.");
          }
        }
  
        showTasks() {
          throw  Error("Method 'showTasks' must be implemented for TodoListInterface.");
        }
      }
  
      // Chatbox class implementing Chat interface
      class Chatbox extends ChatInterface {
        showMessage(message) {
          document.getElementById('chat-messages').innerHTML += `<p>${message}</p>`;
        }
      }
  
      // WeatherDisplay class implementing Weather interface
      class WeatherDisplay extends WeatherInterface {
        displayWeather() {
          console.log("Displaying weather information...");
          
        }
      }
  
      // Calendar class implementing Calendar interface
      class Calendar extends CalendarInterface {
        showEvents() {
          console.log("Displaying upcoming events...");
          
        }
      }
  
      // TodoList class implementing TodoList interface
      class TodoList extends TodoListInterface {
        showTasks() {
          console.log("Displaying to-do list tasks...");
          
        }
      }
  
      let currentComponent;
  
      function showChat() {
        hideCurrentComponent();
        currentComponent = new Chatbox();
        currentComponent.showMessage("Hello, welcome to the chat!");
        document.getElementById('chatbox').style.display = 'block';
      }
  
      function showWeather() {
        hideCurrentComponent();
        currentComponent = new WeatherDisplay();
        currentComponent.displayWeather();
        document.getElementById('weather-display').style.display = 'block';
      }
  
      function showCalendar() {
        hideCurrentComponent();
        currentComponent = new Calendar();
        currentComponent.showEvents();
        document.getElementById('calendar').style.display = 'block';
      }
  
      function showTodoList() {
        hideCurrentComponent();
        currentComponent = new TodoList();
        currentComponent.showTasks();
        document.getElementById('todo-list').style.display = 'block';
      }
  
      function hideCurrentComponent() {
        if (currentComponent) {
          if (currentComponent instanceof ChatInterface) {
            document.getElementById('chatbox').style.display = 'none';
          } else if (currentComponent instanceof WeatherInterface) {
            document.getElementById('weather-display').style.display = 'none';
          } else if (currentComponent instanceof CalendarInterface) {
            document.getElementById('calendar').style.display = 'none';
          } else if (currentComponent instanceof TodoListInterface) {
            document.getElementById('todo-list').style.display = 'none';
          }
        }
      }