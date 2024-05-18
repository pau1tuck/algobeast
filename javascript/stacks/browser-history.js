class BrowserHistory {
    constructor() {
        this.backStack = [];
        this.forwardStack = [];
        this.currentPage = null;
    }
    // Navigate to a new page
    visit(page) {
        if (this.currentPage !== null) {
            this.backStack.push(this.currentPage);
        }
        this.currentPage = page;
        this.forwardStack = []; // Clear forward history
    }
    // Go back to the previous page
    back() {
        if (this.backStack.length > 0) {
            this.forwardStack.push(this.currentPage);
            this.currentPage = this.backStack.pop();
            return this.currentPage;
        }
        return null; // No history to go back
    }
    // Go forward to the next page
    forward() {
        if (this.forwardStack.length > 0) {
            this.backStack.push(this.currentPage);
            this.currentPage = this.forwardStack.pop();
            return this.currentPage;
        }
        return null; // No history to go forward
    }
    // Get the current page
    getCurrentPage() {
        return this.currentPage;
    }
}

// Example usage
const browserHistory = new BrowserHistory();
browserHistory.visit("Page1");
browserHistory.visit("Page2");
console.log(browserHistory.getCurrentPage()); // Output: "Page2"
console.log(browserHistory.back()); // Output: "Page1"
console.log(browserHistory.getCurrentPage()); // Output: "Page1"
console.log(browserHistory.forward()); // Output: "Page2"
console.log(browserHistory.getCurrentPage()); // Output: "Page2"
