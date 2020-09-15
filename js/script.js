$(document).ready(function () {
  // Tooltip for button
  $(document).tooltip();

  // Function to do draggable and resizable tasks
  function dragTask(){
    $('.task').draggable();
    $('.task').resizable();
    console.log('Draggable loaded')
  }

  // Set Variables to columns
  var col_todo = $('.col-1');
  var col_doing = $('.col-2');
  var col_done = $('.col-3');

  // Set const to tasks
  const makeTask = $("#make-task");

  // Function to save in localStorage
  function localeData(taskN,taskD){
    $('.task-name').localStorage(taskName);
    $('.task-description').localStorage(taskDescription);
  }

  // When Make-Task Button is clicked
  makeTask.click(function () {
    var taskName = prompt('Please, enter task name')
    col_todo.append('<div class="task"><h3 class="task-name ui-widget-header">' + taskName + '</h3><textarea class="task-description" cols="25" rows="8"></textarea></div>');
    var taskDescription = $('.task-description');
    console.log('Task added');
    console.log('Task name: '+ taskName);
    console.log('Task description: ' + taskDescription);
    dragTask();
    localeData(taskName,taskDescription);
  });

  // JSON to do things when TASK is DROPPED in a column
  var drop = {
    toDo : function(){
      col_todo.droppable({
        drop: function(){
          console.log('Dropped on To Do')
        }
      })
    },
    doing : function(){
      col_doing.droppable({
        drop: function(){
          console.log('Dropped on Doing')
        }
      })
    },
    done :function(){
      col_done.droppable({
        drop: function(){
          console.log('Dropped on Done')
        }
      })
    }
  }

  // Call JSON
  drop.toDo();
  drop.doing();
  drop.done();
});
