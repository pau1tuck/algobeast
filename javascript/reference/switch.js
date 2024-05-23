switch (expression) {
    case label1:
        statements1;
        break;
    case label2:
        statements2;
        break;
    // …
    default:
        statementsDefault;
}
function handleUserRole(userRole) {
    switch (userRole) {
        case 'member':
            displayBasicContent();
            sendWelcomeEmail();
            break;

        case 'staff':
            displayIntermediateContent();
            provideModerationTools();
            logStaffAccess();
            break;

        case 'admin':
            displayFullAccessContent();
            provideAdminPanelAccess();
            logAdminActivity();
            generateReports();
            break;

        default:
            displayGuestContent();
            promptForRegistration();
    }
}
handleUserRole('admin');