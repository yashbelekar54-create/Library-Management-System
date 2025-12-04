// Enhanced Application Data with Real-time Features
const appData = {
  systemConfig: {
    libraryName: "Advanced Engineering College Library",
    maxBooksPerUser: {student: 5, faculty: 10, staff: 3},
    loanPeriods: {student: 14, faculty: 30, staff: 21},
    finePerDay: 2,
    features: ["RFID", "QR_CODE", "SELF_SERVICE", "MOBILE_APP", "AI_RECOMMENDATIONS", "REAL_TIME"]
  },
  users: {
    admin: {username: "admin", password: "admin123", role: "admin", name: "Dr. Sarah Johnson", email: "admin@library.edu", isApproved: true},
    student: {username: "student", password: "student123", role: "student", name: "Rahul Kumar", studentId: "CS2021001", email: "rahul@student.edu", department: "Computer Science", year: "3rd Year", isApproved: true},
    faculty: {username: "faculty", password: "faculty123", role: "faculty", name: "Prof. Amit Sharma", employeeId: "FAC001", email: "amit@faculty.edu", department: "Mechanical Engineering", designation: "Associate Professor", isApproved: true}
  },
  books: [
    {id: 1, title: "Advanced Data Structures and Algorithms", author: "Thomas H. Cormen", isbn: "9780262033848", category: "Computer Science", status: "Available", location: "CS-A-101", copies: 5, available: 3, rfidTag: "CS001A", rating: 4.8, downloads: 1247, subjects: ["Programming", "Algorithms", "Data Structures"]},
    {id: 2, title: "Engineering Mechanics: Dynamics", author: "Russell Hibbeler", isbn: "9780134814971", category: "Mechanical Engineering", status: "Available", location: "ME-B-205", copies: 8, available: 6, rfidTag: "ME002B", rating: 4.6, downloads: 967, subjects: ["Mechanics", "Dynamics", "Engineering Physics"]},
    {id: 3, title: "Digital Signal Processing: Theory and Practice", author: "Alan Oppenheim", isbn: "9781119321569", category: "Electronics Engineering", status: "Available", location: "EC-C-150", copies: 6, available: 4, rfidTag: "EC003C", rating: 4.7, downloads: 823, subjects: ["Signal Processing", "Digital Systems", "Mathematics"]},
    {id: 4, title: "Structural Analysis: A Unified Approach", author: "Russell Hibbeler", isbn: "9780134610672", category: "Civil Engineering", status: "Available", location: "CE-D-180", copies: 7, available: 5, rfidTag: "CE004D", rating: 4.5, downloads: 734, subjects: ["Structural Engineering", "Analysis", "Design"]},
    {id: 5, title: "Machine Learning: A Probabilistic Perspective", author: "Kevin Murphy", isbn: "9780131988422", category: "Computer Science", status: "Issued", location: "CS-E-120", copies: 4, available: 0, rfidTag: "CS005E", rating: 4.9, downloads: 1456, subjects: ["Machine Learning", "AI", "Statistics"]},
    {id: 6, title: "Introduction to Robotics: Mechanics and Control", author: "John Craig", isbn: "9780133489798", category: "Mechanical Engineering", status: "Available", location: "ME-F-110", copies: 3, available: 2, rfidTag: "ME006F", rating: 4.7, downloads: 892, subjects: ["Robotics", "Control Systems", "Automation"]},
    {id: 7, title: "VLSI Design Fundamentals", author: "Neil Weste", isbn: "9780321547743", category: "Electronics Engineering", status: "Reserved", location: "EC-G-155", copies: 5, available: 1, rfidTag: "EC007G", rating: 4.4, downloads: 654, subjects: ["VLSI", "Chip Design", "Semiconductors"]},
    {id: 8, title: "Environmental Engineering: Principles and Practice", author: "Mackenzie Davis", isbn: "9780073401140", category: "Civil Engineering", status: "Available", location: "CE-H-190", copies: 6, available: 4, rfidTag: "CE008H", rating: 4.3, downloads: 543, subjects: ["Environmental", "Sustainability", "Water Treatment"]}
  ],
  eBooks: [
    {id: 101, title: "Introduction to Artificial Intelligence", author: "Stuart Russell", format: "PDF", size: "25MB", downloads: 2341, rating: 4.8, category: "Computer Science", accessType: "Online"},
    {id: 102, title: "Renewable Energy Systems", author: "Henrik Lund", format: "EPUB", size: "18MB", downloads: 1876, rating: 4.6, category: "Environmental Engineering", accessType: "Download"},
    {id: 103, title: "Quantum Computing: An Applied Approach", author: "Hidary", format: "PDF", size: "32MB", downloads: 1654, rating: 4.9, category: "Computer Science", accessType: "Online"},
    {id: 104, title: "Advanced Materials Science", author: "William Callister", format: "EPUB", size: "28MB", downloads: 1234, rating: 4.5, category: "Materials Engineering", accessType: "Download"}
  ],
  digitalLibrary: [
    {id: 1, title: "IEEE Engineering Database", type: "Database", access: "Online", usage: 15670, description: "Complete IEEE journals and conferences", icon: "🗃️"},
    {id: 2, title: "ScienceDirect Engineering Collection", type: "E-Journal", access: "Online", usage: 12340, description: "Elsevier engineering journals", icon: "📰"},
    {id: 3, title: "Technical Standards Library", type: "Standards", access: "Download", usage: 8750, description: "ASTM, ISO, IEEE standards", icon: "📋"},
    {id: 4, title: "Engineering Thesis Repository", type: "Thesis", access: "Online", usage: 6540, description: "Student thesis and project repository", icon: "🎓"},
    {id: 5, title: "ACM Digital Library", type: "Database", access: "Online", usage: 9876, description: "Computer science research papers", icon: "💻"},
    {id: 6, title: "Springer Engineering Collection", type: "E-Book", access: "Download", usage: 7654, description: "Engineering textbooks and references", icon: "📖"}
  ],
  analytics: {
    totalBooks: 15420,
    totalUsers: 3456,
    booksIssued: 2247,
    overdueBooks: 156,
    digitalResources: 5670,
    monthlyCirculation: [220, 245, 267, 289, 301, 334, 367, 389, 401, 376, 298, 256],
    categoryUsage: {"Computer Science": 35, "Mechanical Engineering": 25, "Electronics": 20, "Civil Engineering": 15, "Others": 5},
    userActivity: {"active": 2840, "inactive": 616},
    realTimeStats: {currentUsers: 142, booksCheckedOutToday: 67, returnsToday: 43, reservationsToday: 29}
  },
  notifications: [
    {id: 1, type: "due_soon", message: "Book 'Digital Signal Processing' is due in 2 days", timestamp: "2025-09-12T10:30:00", read: false, priority: "high"},
    {id: 2, type: "reservation_ready", message: "Your reserved book 'Machine Learning' is now available", timestamp: "2025-09-12T09:15:00", read: false, priority: "medium"},
    {id: 3, type: "new_arrival", message: "New books in Computer Science have arrived", timestamp: "2025-09-11T14:20:00", read: true, priority: "low"},
    {id: 4, type: "fine_reminder", message: "You have pending fine of ₹20", timestamp: "2025-09-11T08:00:00", read: false, priority: "high"},
    {id: 5, type: "maintenance", message: "System maintenance scheduled for tonight", timestamp: "2025-09-10T16:45:00", read: true, priority: "medium"}
  ],
  aiResponses: {
    greetings: ["Hello! I'm your AI library assistant. How can I help you today?", "Hi there! What can I help you find in our library?", "Welcome! I'm here to assist you with any library-related questions."],
    bookSearch: ["I found several books matching your search. Let me show you the most relevant ones.", "Here are some great books I think you'll enjoy based on your query.", "I've found some excellent resources for you. Would you like me to check their availability?"],
    general: ["I'm here to help with book searches, availability checks, recommendations, and general library information.", "Feel free to ask me about our books, digital resources, library hours, or any other questions!", "I can assist you with finding books, checking due dates, making reservations, and much more."]
  },
  registrationData: {
    currentStep: 1,
    formData: {}
  }
};

// Application State
let currentUser = null;
let currentView = 'welcome';
let filteredBooks = [...appData.books];
let filteredDigitalResources = [...appData.digitalLibrary];
let realTimeInterval = null;
let aiChatHistory = [];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeApp();
        setupEventListeners();
        // Start real-time updates after a short delay to ensure UI is ready
        setTimeout(() => {
            startRealTimeUpdates();
        }, 1000);
    } catch (error) {
        console.error('Error initializing app:', error);
        // Show a basic error message if something goes wrong
        document.body.innerHTML = `
            <div style="padding: 20px; text-align: center; color: red;">
                <h2>Application Error</h2>
                <p>There was an error loading the application. Please refresh the page.</p>
                <p>Error: ${error.message}</p>
            </div>
        `;
    }
});

function initializeApp() {
    showWelcomePage();
    populateCategoryFilters();
    setupNotifications();
}

function setupEventListeners() {
    // Welcome page buttons
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const guestBtn = document.getElementById('guestBtn');
    
    if (loginBtn) loginBtn.addEventListener('click', showLoginPage);
    if (registerBtn) registerBtn.addEventListener('click', showRegistrationPage);
    if (guestBtn) guestBtn.addEventListener('click', loginAsGuest);

    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Registration form
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistration);
    }

    // Navigation
    document.addEventListener('click', handleNavigation);

    // Search functionality
    const globalSearch = document.getElementById('globalSearch');
    if (globalSearch) {
        globalSearch.addEventListener('input', handleGlobalSearch);
    }

    const bookSearch = document.getElementById('bookSearch');
    if (bookSearch) {
        bookSearch.addEventListener('input', filterBooks);
    }

    // AI Chat
    const aiChatInput = document.getElementById('aiChatInput');
    if (aiChatInput) {
        aiChatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendAIMessage();
            }
        });
    }

    // File upload change handlers
    document.addEventListener('change', function(e) {
        if (e.target.type === 'file') {
            handleFileUpload(e.target);
        }
        if (e.target.id === 'regRole') {
            showRoleFields();
        }
    });

    // Modal and dropdown handlers
    setupModalsAndDropdowns();

    // Logout handler
    document.addEventListener('click', function(e) {
        if (e.target.id === 'logoutBtn') {
            handleLogout();
        }
    });

    // Toast close
    const toastClose = document.getElementById('toastClose');
    if (toastClose) {
        toastClose.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeToast();
        });
    }
}

// Welcome Page Functions
function showWelcomePage() {
    hideAllPages();
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.remove('hidden');
        welcomePage.classList.add('active');
    }
    currentView = 'welcome';
}

function showLoginPage() {
    hideAllPages();
    const loginPage = document.getElementById('loginPage');
    if (loginPage) {
        loginPage.classList.remove('hidden');
        loginPage.classList.add('active');
    }
    currentView = 'login';
}

function showRegistrationPage() {
    hideAllPages();
    const registrationPage = document.getElementById('registrationPage');
    if (registrationPage) {
        registrationPage.classList.remove('hidden');
        registrationPage.classList.add('active');
    }
    currentView = 'registration';
    resetRegistrationForm();
}

function hideAllPages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });
}

function loginAsGuest() {
    currentUser = {
        username: "guest",
        role: "guest", 
        name: "Guest User",
        email: "guest@library.edu"
    };
    showMainApp();
    showToast('Welcome! You are browsing as a guest.', 'info');
}

// Registration Functions
function resetRegistrationForm() {
    appData.registrationData.currentStep = 1;
    appData.registrationData.formData = {};
    showRegistrationStep(1);
    updateProgressBar(1);
}

function showRegistrationStep(step) {
    // Hide all steps
    for (let i = 1; i <= 4; i++) {
        const stepEl = document.getElementById(`regStep${i}`);
        if (stepEl) {
            stepEl.classList.remove('active');
            stepEl.classList.add('hidden');
        }
    }

    // Show current step
    const currentStepEl = document.getElementById(`regStep${step}`);
    if (currentStepEl) {
        currentStepEl.classList.add('active');
        currentStepEl.classList.remove('hidden');
    }

    // Update progress steps
    for (let i = 1; i <= 4; i++) {
        const progressStep = document.getElementById(`step${i}`);
        if (progressStep) {
            progressStep.classList.toggle('active', i <= step);
        }
    }

    // Show role-specific fields in step 2
    if (step === 2) {
        showRoleFields();
    }
}

function updateProgressBar(step) {
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        const percentage = (step / 4) * 100;
        progressFill.style.width = `${percentage}%`;
    }
}

function showRoleFields() {
    const roleSelect = document.getElementById('regRole');
    if (!roleSelect) return;
    
    const role = roleSelect.value;
    
    // Hide all role fields
    const roleFields = document.querySelectorAll('.role-fields');
    roleFields.forEach(field => {
        field.classList.remove('show');
        field.classList.add('hidden');
    });

    // Show specific role fields
    if (role) {
        const specificFields = document.getElementById(`${role}Fields`);
        if (specificFields) {
            specificFields.classList.add('show');
            specificFields.classList.remove('hidden');
        }
    }
}

// Make functions globally available for onclick handlers
window.nextStep = function() {
    const currentStep = appData.registrationData.currentStep;
    
    if (validateCurrentStep(currentStep)) {
        saveStepData(currentStep);
        
        if (currentStep < 4) {
            appData.registrationData.currentStep++;
            showRegistrationStep(appData.registrationData.currentStep);
            updateProgressBar(appData.registrationData.currentStep);
        }
    }
};

window.prevStep = function() {
    if (appData.registrationData.currentStep > 1) {
        appData.registrationData.currentStep--;
        showRegistrationStep(appData.registrationData.currentStep);
        updateProgressBar(appData.registrationData.currentStep);
    }
};

window.cancelRegistration = function() {
    showWelcomePage();
};

function validateCurrentStep(step) {
    switch(step) {
        case 1:
            const requiredFields = ['regName', 'regEmail', 'regPhone', 'regRole'];
            return requiredFields.every(field => {
                const el = document.getElementById(field);
                return el && el.value.trim() !== '';
            });
        case 2:
            const role = document.getElementById('regRole')?.value;
            if (role === 'student') {
                return document.getElementById('studentId')?.value.trim() !== '' &&
                       document.getElementById('department')?.value !== '' &&
                       document.getElementById('year')?.value !== '';
            } else if (role === 'faculty') {
                return document.getElementById('employeeId')?.value.trim() !== '' &&
                       document.getElementById('facultyDept')?.value !== '' &&
                       document.getElementById('designation')?.value.trim() !== '';
            } else if (role === 'staff') {
                return document.getElementById('staffId')?.value.trim() !== '' &&
                       document.getElementById('position')?.value.trim() !== '';
            }
            return false;
        case 3:
            return document.getElementById('profilePhoto')?.files.length > 0 &&
                   document.getElementById('idDocument')?.files.length > 0 &&
                   document.getElementById('affiliationProof')?.files.length > 0;
        case 4:
            return document.getElementById('termsAccept')?.checked;
        default:
            return true;
    }
}

function saveStepData(step) {
    const formData = appData.registrationData.formData;
    
    switch(step) {
        case 1:
            formData.name = document.getElementById('regName')?.value || '';
            formData.email = document.getElementById('regEmail')?.value || '';
            formData.phone = document.getElementById('regPhone')?.value || '';
            formData.role = document.getElementById('regRole')?.value || '';
            break;
        case 2:
            const role = formData.role;
            if (role === 'student') {
                formData.studentId = document.getElementById('studentId')?.value || '';
                formData.department = document.getElementById('department')?.value || '';
                formData.year = document.getElementById('year')?.value || '';
            } else if (role === 'faculty') {
                formData.employeeId = document.getElementById('employeeId')?.value || '';
                formData.department = document.getElementById('facultyDept')?.value || '';
                formData.designation = document.getElementById('designation')?.value || '';
            } else if (role === 'staff') {
                formData.staffId = document.getElementById('staffId')?.value || '';
                formData.position = document.getElementById('position')?.value || '';
            }
            break;
        case 3:
            formData.documents = {
                profilePhoto: document.getElementById('profilePhoto')?.files[0]?.name || '',
                idDocument: document.getElementById('idDocument')?.files[0]?.name || '',
                affiliationProof: document.getElementById('affiliationProof')?.files[0]?.name || ''
            };
            break;
        case 4:
            formData.language = document.getElementById('language')?.value || 'en';
            formData.notifications = {
                email: document.getElementById('emailNotif')?.checked || false,
                sms: document.getElementById('smsNotif')?.checked || false,
                push: document.getElementById('pushNotif')?.checked || false
            };
            formData.interests = document.getElementById('interests')?.value || '';
            break;
    }
}

function handleRegistration(e) {
    e.preventDefault();
    
    saveStepData(4);
    
    // Simulate registration process
    showToast('Processing registration...', 'info');
    
    setTimeout(() => {
        // Create new user account
        const formData = appData.registrationData.formData;
        const newUser = {
            username: formData.email.split('@')[0],
            password: generateTemporaryPassword(),
            role: formData.role,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            isApproved: false,
            registrationDate: new Date().toISOString(),
            ...formData
        };
        
        // Add to users database (simulation)
        appData.users[newUser.username] = newUser;
        
        // Show success modal
        showModal('registrationSuccessModal');
        
        // Send verification email (simulation)
        setTimeout(() => {
            showToast('Verification email sent to ' + formData.email, 'success');
        }, 1000);
    }, 2000);
}

function generateTemporaryPassword() {
    return Math.random().toString(36).slice(-8);
}

function handleFileUpload(fileInput) {
    const file = fileInput.files[0];
    if (file) {
        const previewId = fileInput.id + 'Preview';
        const preview = document.getElementById(previewId);
        if (preview) {
            preview.textContent = `✅ ${file.name} selected`;
            preview.classList.remove('hidden');
        }
    }
}

// Login Functions
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username')?.value || '';
    const password = document.getElementById('password')?.value || '';
    
    // Check credentials
    const user = Object.values(appData.users).find(u => 
        (u.username === username || u.email === username) && u.password === password
    );
    
    if (user) {
        if (!user.isApproved && user.role !== 'guest') {
            showToast('Your account is pending approval. Please contact the administrator.', 'warning');
            return;
        }
        
        currentUser = user;
        showMainApp();
        showToast(`Welcome back, ${user.name}!`, 'success');
    } else {
        showToast('Invalid credentials. Please try again.', 'error');
    }
}

// Make demo credentials function globally available
window.fillDemoCredentials = function(type) {
    const credentials = {
        admin: {username: 'admin', password: 'admin123'},
        faculty: {username: 'faculty', password: 'faculty123'},
        student: {username: 'student', password: 'student123'}
    };
    
    if (credentials[type]) {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        
        if (usernameInput) usernameInput.value = credentials[type].username;
        if (passwordInput) passwordInput.value = credentials[type].password;
    }
};

function handleLogout() {
    currentUser = null;
    if (realTimeInterval) {
        clearInterval(realTimeInterval);
    }
    showWelcomePage();
    showToast('Logged out successfully!', 'success');
}

// Main Application Functions
function showMainApp() {
    hideAllPages();
    const mainApp = document.getElementById('mainApp');
    if (mainApp) {
        mainApp.classList.remove('hidden');
        mainApp.classList.add('active');
    }
    
    setupNavigation();
    showDashboard();
    updateUserInterface();
    startRealTimeUpdates();
}

function setupNavigation() {
    const navItems = [
        {key: 'dashboard', label: '🏠 Dashboard', roles: ['admin', 'faculty', 'student', 'guest']},
        {key: 'books', label: '📚 Smart Catalog', roles: ['admin', 'faculty', 'student', 'guest']},
        {key: 'circulation', label: '🔄 Circulation', roles: ['admin']},
        {key: 'digital', label: '💻 Digital Library', roles: ['admin', 'faculty', 'student', 'guest']},
        {key: 'reports', label: '📊 Analytics', roles: ['admin', 'faculty']},
        {key: 'settings', label: '⚙️ Settings', roles: ['admin']}
    ];
    
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.innerHTML = '';
        
        navItems.forEach(item => {
            if (item.roles.includes(currentUser.role)) {
                const navItem = document.createElement('div');
                navItem.className = 'nav-item';
                navItem.dataset.view = item.key;
                navItem.textContent = item.label;
                
                if (item.key === 'dashboard') {
                    navItem.classList.add('active');
                }
                
                navMenu.appendChild(navItem);
            }
        });
    }
}

function updateUserInterface() {
    const currentUserSpan = document.getElementById('currentUser');
    if (currentUserSpan) {
        currentUserSpan.textContent = `${currentUser.name} (${currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1)})`;
    }
    
    // Show/hide admin-only elements
    const adminElements = document.querySelectorAll('.admin-only');
    adminElements.forEach(el => {
        if (currentUser.role === 'admin') {
            el.classList.add('show');
            el.classList.remove('hidden');
        } else {
            el.classList.remove('show');
            el.classList.add('hidden');
        }
    });
    
    // Update real-time stats
    updateRealTimeStats();
}

// Navigation Handler
function handleNavigation(e) {
    if (e.target.classList.contains('nav-item')) {
        const view = e.target.dataset.view;
        showView(view);
    }
}

function showView(viewName) {
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.view === viewName) {
            item.classList.add('active');
        }
    });
    
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
        view.classList.add('hidden');
    });
    
    // Show selected view
    const targetView = document.getElementById(viewName + 'View');
    if (targetView) {
        targetView.classList.remove('hidden');
        targetView.classList.add('active');
        currentView = viewName;
        
        // Load view-specific content
        switch(viewName) {
            case 'dashboard':
                showDashboard();
                break;
            case 'books':
                showBooks();
                break;
            case 'circulation':
                showCirculation();
                break;
            case 'digital':
                showDigitalLibrary();
                break;
            case 'reports':
                showReports();
                break;
            case 'settings':
                showSettings();
                break;
        }
    }
}

// Dashboard Functions
function showDashboard() {
    const dashboardTitle = document.getElementById('dashboardTitle');
    const dashboardSubtitle = document.getElementById('dashboardSubtitle');
    
    if (dashboardTitle && dashboardSubtitle) {
        if (currentUser.role === 'admin') {
            dashboardTitle.textContent = 'Admin Dashboard';
            dashboardSubtitle.textContent = 'Real-time library management overview';
            showAdminDashboard();
        } else if (currentUser.role === 'faculty') {
            dashboardTitle.textContent = 'Faculty Dashboard';
            dashboardSubtitle.textContent = `Welcome back, ${currentUser.name}`;
            showFacultyDashboard();
        } else if (currentUser.role === 'student') {
            dashboardTitle.textContent = 'Student Dashboard';
            dashboardSubtitle.textContent = `Welcome back, ${currentUser.name}`;
            showStudentDashboard();
        } else {
            dashboardTitle.textContent = 'Guest Dashboard';
            dashboardSubtitle.textContent = 'Explore our library resources';
            showGuestDashboard();
        }
    }
}

function showAdminDashboard() {
    const dashboardContent = document.getElementById('dashboardContent');
    if (!dashboardContent) return;
    
    dashboardContent.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card">
                <span class="stat-number" id="totalBooksLive">${appData.analytics.totalBooks.toLocaleString()}</span>
                <span class="stat-label">Total Books</span>
                <div class="stat-trend">+245 this month</div>
            </div>
            <div class="stat-card">
                <span class="stat-number" id="totalUsersLive">${appData.analytics.totalUsers.toLocaleString()}</span>
                <span class="stat-label">Active Users</span>
                <div class="stat-trend">+89 this week</div>
            </div>
            <div class="stat-card">
                <span class="stat-number" id="booksIssuedLive">${appData.analytics.booksIssued.toLocaleString()}</span>
                <span class="stat-label">Books Issued</span>
                <div class="stat-trend">+67 today</div>
            </div>
            <div class="stat-card">
                <span class="stat-number" id="overdueBooksLive">${appData.analytics.overdueBooks}</span>
                <span class="stat-label">Overdue Books</span>
                <div class="stat-trend">-12 this week</div>
            </div>
        </div>
        
        <div class="dashboard-card">
            <div class="dashboard-card-header">
                <h3>Live Circulation Trends</h3>
                <div class="live-indicator">
                    <div class="pulse-dot"></div>
                    <span>Live</span>
                </div>
            </div>
            <div class="dashboard-card-body">
                <div class="chart-container" style="position: relative; height: 300px">
                    <canvas id="dashboardChart"></canvas>
                </div>
            </div>
        </div>
        
        <div class="dashboard-card">
            <div class="dashboard-card-header">
                <h3>Real-time Activity Feed</h3>
            </div>
            <div class="dashboard-card-body">
                <div id="liveActivityFeed" class="activity-feed"></div>
            </div>
        </div>
    `;
    
    setTimeout(() => {
        createDashboardChart();
        updateLiveActivityFeed();
    }, 100);
}

function showStudentDashboard() {
    const dashboardContent = document.getElementById('dashboardContent');
    if (!dashboardContent) return;
    
    dashboardContent.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card">
                <span class="stat-number">3</span>
                <span class="stat-label">Books Borrowed</span>
                <div class="stat-trend">2 due this week</div>
            </div>
            <div class="stat-card">
                <span class="stat-number">5</span>
                <span class="stat-label">Books Reserved</span>
                <div class="stat-trend">1 available now</div>
            </div>
            <div class="stat-card">
                <span class="stat-number">15</span>
                <span class="stat-label">Digital Downloads</span>
                <div class="stat-trend">3 this week</div>
            </div>
            <div class="stat-card">
                <span class="stat-number">₹0</span>
                <span class="stat-label">Pending Fines</span>
                <div class="stat-trend">All clear!</div>
            </div>
        </div>
        
        <div class="dashboard-card">
            <div class="dashboard-card-header">
                <h3>AI-Powered Recommendations</h3>
            </div>
            <div class="dashboard-card-body">
                <div class="recommendations-grid">
                    <div class="recommendation-item">
                        <div class="book-icon">📊</div>
                        <div class="recommendation-content">
                            <h4>Data Science Handbook</h4>
                            <p>Based on your CS coursework</p>
                            <button class="btn btn--outline btn--sm">Reserve Now</button>
                        </div>
                    </div>
                    <div class="recommendation-item">
                        <div class="book-icon">🤖</div>
                        <div class="recommendation-content">
                            <h4>AI Ethics and Society</h4>
                            <p>Trending in your department</p>
                            <button class="btn btn--outline btn--sm">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showFacultyDashboard() {
    const dashboardContent = document.getElementById('dashboardContent');
    if (!dashboardContent) return;
    
    dashboardContent.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card">
                <span class="stat-number">12</span>
                <span class="stat-label">Research Papers</span>
                <div class="stat-trend">+3 this month</div>
            </div>
            <div class="stat-card">
                <span class="stat-number">8</span>
                <span class="stat-label">Course Reserves</span>
                <div class="stat-trend">2 updated</div>
            </div>
            <div class="stat-card">
                <span class="stat-number">156</span>
                <span class="stat-label">Student Access</span>
                <div class="stat-trend">+23 this week</div>
            </div>
            <div class="stat-card">
                <span class="stat-number">89%</span>
                <span class="stat-label">Satisfaction</span>
                <div class="stat-trend">+5% improvement</div>
            </div>
        </div>
    `;
}

function showGuestDashboard() {
    const dashboardContent = document.getElementById('dashboardContent');
    if (!dashboardContent) return;
    
    dashboardContent.innerHTML = `
        <div class="guest-welcome">
            <h2>Welcome to Our Digital Library</h2>
            <p>Explore our extensive collection of engineering resources and digital materials.</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-card">
                <span class="stat-number">${appData.analytics.totalBooks.toLocaleString()}</span>
                <span class="stat-label">Books Available</span>
            </div>
            <div class="stat-card">
                <span class="stat-number">${appData.analytics.digitalResources.toLocaleString()}</span>
                <span class="stat-label">Digital Resources</span>
            </div>
            <div class="stat-card">
                <span class="stat-number">24/7</span>
                <span class="stat-label">Online Access</span>
            </div>
            <div class="stat-card">
                <span class="stat-number">15+</span>
                <span class="stat-label">Departments</span>
            </div>
        </div>
        
        <div class="guest-actions">
            <button class="btn btn--primary" onclick="showRegistrationPage()">Create Account for Full Access</button>
            <button class="btn btn--outline" onclick="showLoginPage()">Already Have an Account?</button>
        </div>
    `;
}

// Books Functions
function showBooks() {
    renderBooks();
    setupBookFilters();
}

function renderBooks() {
    const booksGrid = document.getElementById('booksGrid');
    if (!booksGrid) return;
    
    booksGrid.innerHTML = '';
    
    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.onclick = () => showBookDetails(book);
        
        bookCard.innerHTML = `
            <div class="book-header">
                <div class="book-rating">⭐ ${book.rating}</div>
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <span class="book-category">${book.category}</span>
            </div>
            <div class="book-body">
                <div class="book-info">
                    <div class="book-info-item">
                        <span class="book-info-label">ISBN</span>
                        <span class="book-info-value">${book.isbn}</span>
                    </div>
                    <div class="book-info-item">
                        <span class="book-info-label">Location</span>
                        <span class="book-info-value">${book.location}</span>
                    </div>
                    <div class="book-info-item">
                        <span class="book-info-label">Available</span>
                        <span class="book-info-value">${book.available}/${book.copies}</span>
                    </div>
                    <div class="book-info-item">
                        <span class="book-status ${book.status.toLowerCase()}">${book.status}</span>
                    </div>
                </div>
                <div class="book-actions">
                    ${book.status === 'Available' ? 
                        `<button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); reserveBook(${book.id})">Reserve</button>` : 
                        `<button class="btn btn--outline btn--sm" onclick="event.stopPropagation(); joinWaitlist(${book.id})">Join Waitlist</button>`
                    }
                </div>
            </div>
            <div class="book-footer">
                <span>📥 ${book.downloads} downloads</span>
                <span>🏷️ ${book.rfidTag}</span>
            </div>
        `;
        
        booksGrid.appendChild(bookCard);
    });
}

function setupBookFilters() {
    // Category filter
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterBooks);
    }
    
    // Status filter
    const statusFilter = document.getElementById('statusFilter');
    if (statusFilter) {
        statusFilter.addEventListener('change', filterBooks);
    }
}

function filterBooks() {
    const searchTerm = document.getElementById('bookSearch')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    const statusFilter = document.getElementById('statusFilter')?.value || '';
    
    filteredBooks = appData.books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) ||
                            book.author.toLowerCase().includes(searchTerm) ||
                            book.isbn.includes(searchTerm);
        const matchesCategory = !categoryFilter || book.category === categoryFilter;
        const matchesStatus = !statusFilter || book.status === statusFilter;
        
        return matchesSearch && matchesCategory && matchesStatus;
    });
    
    renderBooks();
}

// AI Chat Functions - make globally available
window.toggleAIChat = function() {
    const aiChat = document.getElementById('aiChat');
    if (aiChat) {
        aiChat.classList.toggle('hidden');
        
        if (!aiChat.classList.contains('hidden')) {
            const aiChatInput = document.getElementById('aiChatInput');
            if (aiChatInput) {
                aiChatInput.focus();
            }
        }
    }
};

window.sendAIMessage = function() {
    const input = document.getElementById('aiChatInput');
    if (!input) return;
    
    const message = input.value.trim();
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    input.value = '';
    
    // Generate AI response
    setTimeout(() => {
        const response = generateAIResponse(message);
        addChatMessage(response, 'ai');
    }, 1000);
};

function addChatMessage(message, sender) {
    const chatBody = document.getElementById('aiChatBody');
    if (!chatBody) return;
    
    const messageEl = document.createElement('div');
    messageEl.className = `ai-message ${sender}-message`;
    
    messageEl.innerHTML = `
        <div class="message-content">
            <p>${message}</p>
        </div>
        <span class="message-time">${new Date().toLocaleTimeString()}</span>
    `;
    
    chatBody.appendChild(messageEl);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes('find') || message.includes('search') || message.includes('book')) {
        return `I found several books matching your search. Here are some recommendations: "${appData.books[0].title}", "${appData.books[1].title}", and "${appData.books[2].title}". Would you like me to check their availability?`;
    }
    
    if (message.includes('hour') || message.includes('open') || message.includes('close')) {
        return "Our library is open Monday-Friday 8AM-10PM, Saturday-Sunday 10AM-8PM. Digital resources are available 24/7!";
    }
    
    return "I'm here to help with book searches, availability checks, recommendations, and general library information. What would you like to know?";
}

// Real-time Functions
function startRealTimeUpdates() {
    if (realTimeInterval) {
        clearInterval(realTimeInterval);
    }
    
    realTimeInterval = setInterval(() => {
        updateRealTimeStats();
        updateLiveActivityFeed();
        simulateBookAvailabilityChanges();
    }, 8000);
}

function updateRealTimeStats() {
    const stats = appData.analytics.realTimeStats;
    
    stats.currentUsers += Math.floor(Math.random() * 5) - 2;
    stats.booksCheckedOutToday += Math.floor(Math.random() * 3);
    stats.returnsToday += Math.floor(Math.random() * 2);
    
    stats.currentUsers = Math.max(100, Math.min(200, stats.currentUsers));
    
    const liveUsers = document.getElementById('liveUsers');
    const liveCheckouts = document.getElementById('liveCheckouts');
    
    if (liveUsers) liveUsers.textContent = stats.currentUsers;
    if (liveCheckouts) liveCheckouts.textContent = stats.booksCheckedOutToday;
}

function updateLiveActivityFeed() {
    const feed = document.getElementById('liveActivityFeed');
    if (!feed) return;
    
    const activities = [
        "Book issued: 'Machine Learning Handbook' to Student CS2021045",
        "Book returned: 'Digital Signal Processing' by Faculty FAC012",
        "New reservation: 'Structural Analysis' by Student CE2020078",
        "Fine payment: ₹20 by Student ME2021023",
        "E-book downloaded: 'AI Ethics' by Faculty FAC008"
    ];
    
    const activity = activities[Math.floor(Math.random() * activities.length)];
    const timestamp = new Date().toLocaleTimeString();
    
    const activityEl = document.createElement('div');
    activityEl.className = 'activity-feed-item';
    activityEl.innerHTML = `
        <div class="activity-icon">📚</div>
        <div class="activity-content">
            <div class="activity-description">${activity}</div>
            <div class="activity-time">${timestamp}</div>
        </div>
    `;
    
    feed.insertBefore(activityEl, feed.firstChild);
    
    while (feed.children.length > 8) {
        feed.removeChild(feed.lastChild);
    }
}

function simulateBookAvailabilityChanges() {
    if (Math.random() < 0.4) {
        const randomBook = appData.books[Math.floor(Math.random() * appData.books.length)];
        
        if (randomBook.status === 'Available' && randomBook.available > 0) {
            randomBook.available = Math.max(0, randomBook.available - 1);
            if (randomBook.available === 0) {
                randomBook.status = 'Issued';
            }
            
            showToast(`Book availability updated: "${randomBook.title}" - ${randomBook.available} copies left`, 'info');
        }
    }
}

// Digital Library Functions
function showDigitalLibrary() {
    renderDigitalResources();
}

function renderDigitalResources() {
    const digitalResourcesGrid = document.getElementById('digitalResourcesGrid');
    if (!digitalResourcesGrid) return;
    
    digitalResourcesGrid.innerHTML = filteredDigitalResources.map(resource => `
        <div class="digital-resource-card">
            <div class="resource-header">
                <div class="resource-icon ${resource.type.toLowerCase()}">${resource.icon}</div>
                <div>
                    <h3 class="resource-title">${resource.title}</h3>
                    <span class="resource-type">${resource.type}</span>
                </div>
            </div>
            <p class="resource-description">${resource.description}</p>
            <div class="resource-stats">
                <span>📊 ${resource.usage.toLocaleString()} uses</span>
                <span>🌐 ${resource.access}</span>
            </div>
            <div class="resource-actions">
                <button class="btn btn--primary btn--sm" onclick="accessResource(${resource.id})">
                    ${resource.access === 'Online' ? '🔗 Access' : '📥 Download'}
                </button>
                <button class="btn btn--outline btn--sm" onclick="bookmarkResource(${resource.id})">🔖 Bookmark</button>
            </div>
        </div>
    `).join('');
}

// Make functions globally available
window.accessResource = function(resourceId) {
    const resource = appData.digitalLibrary.find(r => r.id === resourceId);
    if (resource) {
        resource.usage++;
        showToast(`Accessing ${resource.title}...`, 'success');
    }
};

window.bookmarkResource = function(resourceId) {
    const resource = appData.digitalLibrary.find(r => r.id === resourceId);
    if (resource) {
        showToast(`${resource.title} added to bookmarks!`, 'success');
    }
};

window.reserveBook = function(bookId) {
    const book = appData.books.find(b => b.id === bookId);
    if (book && book.status === 'Available') {
        book.status = 'Reserved';
        book.available--;
        showToast(`"${book.title}" reserved successfully!`, 'success');
        renderBooks();
    }
};

window.joinWaitlist = function(bookId) {
    const book = appData.books.find(b => b.id === bookId);
    if (book) {
        showToast(`Added to waitlist for "${book.title}"`, 'info');
    }
};

function showBookDetails(book) {
    showToast(`Showing details for "${book.title}"`, 'info');
}

// Reports Functions
function showReports() {
    setTimeout(() => {
        createReportsCharts();
    }, 100);
}

function createReportsCharts() {
    createDashboardChart();
}

function createDashboardChart() {
    const ctx = document.getElementById('dashboardChart');
    if (!ctx || !window.Chart) return;
    
    try {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Books Circulated',
                    data: appData.analytics.monthlyCirculation,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } catch (error) {
        console.log('Chart.js not available or error creating chart:', error);
    }
}

// Utility Functions
function populateCategoryFilters() {
    const categories = [...new Set(appData.books.map(book => book.category))];
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (categoryFilter) {
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }
}

function setupNotifications() {
    const notificationsList = document.getElementById('notificationsList');
    if (!notificationsList) return;
    
    notificationsList.innerHTML = appData.notifications.map(notification => `
        <div class="notification-item ${notification.read ? 'read' : ''}">
            <div class="notification-icon ${notification.type}">
                ${getNotificationIcon(notification.type)}
            </div>
            <div class="notification-content">
                <div class="notification-message">${notification.message}</div>
                <div class="notification-date">${new Date(notification.timestamp).toLocaleString()}</div>
            </div>
            ${!notification.read ? '<div class="notification-unread"></div>' : ''}
        </div>
    `).join('');
}

function getNotificationIcon(type) {
    const icons = {
        'due_soon': '⏰',
        'reservation_ready': '📖',
        'new_arrival': '📚',
        'fine_reminder': '💰',
        'maintenance': '🔧'
    };
    return icons[type] || '📢';
}

function setupModalsAndDropdowns() {
    // Modal close handlers
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
            closeModal();
        }
    });
    
    // Notifications dropdown
    const notificationsBtn = document.getElementById('notificationsBtn');
    if (notificationsBtn) {
        notificationsBtn.addEventListener('click', toggleNotifications);
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.notifications-dropdown')) {
            const dropdown = document.getElementById('notificationsDropdown');
            if (dropdown) dropdown.classList.add('hidden');
        }
    });
}

function toggleNotifications() {
    const dropdown = document.getElementById('notificationsDropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.add('hidden');
    });
    document.body.style.overflow = 'auto';
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.className = `toast ${type}`;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }
}

function closeToast() {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.classList.remove('show');
    }
}

function handleGlobalSearch(e) {
    const query = e.target.value;
    if (query.length > 2) {
        console.log('Global search:', query);
    }
}

function showCirculation() {
    // Circulation management interface
}

function showSettings() {
    // Settings interface
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    showToast('An error occurred. Please try refreshing the page.', 'error');
});

// Ensure global functions are available
window.showWelcomePage = showWelcomePage;
window.showLoginPage = showLoginPage;
window.showRegistrationPage = showRegistrationPage;