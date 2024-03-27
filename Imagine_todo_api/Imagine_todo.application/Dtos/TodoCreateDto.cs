﻿
namespace Imagine_todo.application.Dtos
{
    public class TodoCreateDto : ITodoDto
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime DueDate { get; set; }
    }
}
