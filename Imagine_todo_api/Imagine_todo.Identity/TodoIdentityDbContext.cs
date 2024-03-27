﻿using Imagine_todo.Identity.Configurations;
using Imagine_todo.domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Imagine_todo.Identity
{
    public class TodoIdentityDbContext : IdentityDbContext<ApplicationUser>
    {
        public const string SchemaTableNameAppDB = "__EFMigrationsHistory";
        public TodoIdentityDbContext(DbContextOptions<TodoIdentityDbContext> options)
        : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new UserRoleConfiguration());
        }
    }
}
