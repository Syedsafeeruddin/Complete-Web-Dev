const employees = [
  {
    id: 1,
    name: "John Smith",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Prepare monthly report",
        description: "Compile and submit the monthly sales report.",
        date: "12-08-2025",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Update client database",
        description: "Add the latest client contact information to the database.",
        date: "14-08-2025",
        category: "Database",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team meeting",
        description: "Weekly project update meeting with the team.",
        date: "15-08-2025",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Website content review",
        description: "Check and update website product descriptions.",
        date: "13-08-2025",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Inventory check",
        description: "Audit warehouse inventory for missing items.",
        date: "14-08-2025",
        category: "Inventory",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Customer follow-up",
        description: "Call 5 customers to follow up on recent orders.",
        date: "16-08-2025",
        category: "Customer Service",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Training session",
        description: "Attend skill improvement training.",
        date: "17-08-2025",
        category: "Training",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    name: "Michael Williams",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Product testing",
        description: "Test new product features before release.",
        date: "12-08-2025",
        category: "Quality Control",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Social media campaign",
        description: "Create and post campaign content on Instagram.",
        date: "14-08-2025",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Data backup",
        description: "Run system backup for company servers.",
        date: "15-08-2025",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client proposal",
        description: "Draft a proposal for a new client project.",
        date: "16-08-2025",
        category: "Sales",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix bug #142",
        description: "Resolve payment processing bug in checkout system.",
        date: "17-08-2025",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Design new flyer",
        description: "Create promotional flyer for product launch.",
        date: "13-08-2025",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Supplier meeting",
        description: "Discuss price adjustments with supplier.",
        date: "14-08-2025",
        category: "Procurement",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Email newsletter",
        description: "Send out August newsletter to subscribers.",
        date: "15-08-2025",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    name: "David Brown",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "App performance test",
        description: "Measure app performance under heavy traffic.",
        date: "12-08-2025",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Security patch",
        description: "Apply security patch to internal systems.",
        date: "13-08-2025",
        category: "IT",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Organize workshop",
        description: "Plan technical workshop for team members.",
        date: "14-08-2025",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client onboarding",
        description: "Help new client get started with our services.",
        date: "15-08-2025",
        category: "Customer Service",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
]

const admin = [
  {
    id: 1,
    name: "Alice Admin",
    email: "admin@example.com",
    password: "123"
  }
]


export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem('employess'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employee, admin}; 
  
}
