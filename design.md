# Vexatry Internship Portal — Design Specification

## 1. Project Overview

Build a dedicated internship portal for Vexatry Global.

The portal should allow studentscandidates to

 Browse available internships
 Create an account
 Loginlogout securely
 Complete their profile
 Upload resume
 Apply for internships
 Track application status
 View internship details
 View internship progressstatus
 Access issued certificates
 Verifydownload their certificates
 Manage their account

The portal should feel like an official Vexatry Global product, but it should have a more youthful and career-focused personality than the main Vexatry corporate website.

---

# 2. Design Direction

## Design Concept

### Vexatry Launchpad

The visual identity should be based on the existing Vexatry Global design language.

Do NOT create a completely unrelated visual theme.

The portal should feel like

 Vexatry Global + modern startup careers platform + student-focused experience

The design should be

 Modern
 Clean
 Youthful
 Professional
 Minimal
 Trustworthy
 Easy to navigate
 Mobile-friendly

Avoid making it look like a coaching institute, job spam website, or generic certificate-selling platform.

---

# 3. Existing Vexatry Visual Language

Maintain the existing Vexatry design foundation.

## Primary Colors

### Background

`#F9F9F7`

Use as the primary page background.

### Black

`#000000`

Use for

 Main text
 Borders
 Navigation
 Buttons
 Headings

### Lime

`#EDFE5E`

Use as the primary accent.

Use for

 Primary CTA
 Highlight areas
 Important labels
 Selected states
 Small decorative elements

### Cornflower Blue

`#BED4FB`

Use as a secondary accent.

### Spring Green

`#31E992`

Use for

 Success states
 Application approved
 Certificate issued
 Completed status
 Positive indicators

---

# 4. Visual Rules

Use

 Thin black borders
 Large typography
 Generous whitespace
 Simple geometric shapes
 Flat UI
 Very subtle or no shadows
 Small border radius
 Strong typography hierarchy

Avoid

 Heavy gradients
 Glassmorphism
 Excessive shadows
 Neon effects
 Excessive animations
 Overly rounded UI
 Generic stock-photo layouts
 Excessive illustrations

The design should look intentional and premium without becoming complicated.

---

# 5. Typography

Use the same typography direction as the current Vexatry website.

Primary font

Manrope

Use

 Large bold headings
 Medium-weight body text
 Strong button typography
 Compact labels

Headings should have strong visual presence.

Example

```text
BUILD.
LEARN.
GROW.
```

Body copy should remain short and readable.

---

# 6. Site Architecture

The portal should contain two major areas

## Public Website

```text

├── Home
├── Internships
├── Internship Detail
├── How It Works
├── Life at Vexatry
├── FAQ
├── Certificate Verification
├── Login
└── Register
```

## Student Portal

```text
dashboard
├── Dashboard
├── Profile
├── My Applications
├── Internship
├── Certificate
├── Notifications
└── Account Settings
```

---

# 7. Public Navbar

Desktop navbar

```text
VEXATRY GLOBAL
INTERNSHIPS

Internships
How It Works
Life at Vexatry
Certificate Verification

Login
Apply Now →
```

The `Apply Now` button should use the lime accent.

On mobile, use a clean hamburger menu.

---

# 8. Homepage

## Hero Section

Hero should immediately explain what the platform is.

Example direction

```text
BUILD.
LEARN.
GROW.

Start your internship journey
with Vexatry Global.

Work on real projects, develop practical
skills and build experience that matters.

[ Explore Internships → ]
[ How It Works ]
```

Do not overload the hero with too much information.

Use a visual composition on the right side.

Possible visual

 Internship application card
 Candidate profile card
 Project card
 Certificate card

These cards can visually communicate the entire student journey.

---

# 9. Why Vexatry

Section heading

```text
More than an internship.
A place to build.
```

Use 4 cards.

### Real Projects

Work on practical projects and assignments.

### Learn by Doing

Develop skills through actual work.

### Mentorship

Get guidance during your internship.

### Build Your Portfolio

Create work that can be showcased professionally.

Only display benefits that Vexatry actually provides.

---

# 10. Internship Listings

Heading

```text
Find your opportunity.
```

Provide internship cards.

Each card should contain

```text
Web Development Intern

Development

Remote  Hybrid

3 Months

HTML · CSS · JavaScript · Django

View Internship →
```

Other possible categories

 Web Development
 Backend Development
 Frontend Development
 UIUX Design
 Digital Marketing
 SEO
 Content
 Business Development

Do not hardcode these categories if they will be managed from Django admin.

---

# 11. Internship Filters

The listing page should support

 Search
 Category
 Location
 Work mode
 Duration
 Status

Example

```text
Search internships...

[All Departments]
[All Locations]
[All Work Modes]

12 Opportunities
```

Cards should remain simple and easy to scan.

---

# 12. Internship Detail Page

Each internship should have a dedicated detail page.

Structure

```text
Web Development Intern

Development
Remote
3 Months

[ Apply Now → ]
```

Then

## About the Internship

Description.

## What You'll Do

Bullet list.

## Skills You'll Work With

Skill tags.

## Who Can Apply

Eligibility information.

## Internship Duration

Duration.

## Work Mode

Remote  Hybrid  On-site.

## Selection Process

Simple process

```text
01 Apply
02 Review
03 Interview
04 Selection
05 Internship
06 Completion
```

## FAQ

Internship-specific questions.

At the bottom

```text
Ready to start

[ Apply for this Internship → ]
```

If the student is not logged in

```text
Login  Register to Apply
```

---

# 13. Registration Page

Registration should be simple.

Heading

```text
Start your journey.
```

Fields

```text
Full Name
Email
Password
Confirm Password
```

Button

```text
Create Account →
```

Optional

```text
Already have an account
Login
```

Do not ask for unnecessary information during registration.

Additional profile information should be collected after registration.

---

# 14. Login Page

Simple login interface.

```text
Welcome back.

Email
Password

[ Login → ]

Forgot password

Don't have an account
Create one
```

The login page should have a small Vexatry visual element rather than a generic login template.

---

# 15. Student Onboarding

After registration, guide the student to complete their profile.

Example

```text
Complete your profile

████████░░ 80%

Basic Information
Education
Skills
Resume
Links

[ Complete Profile → ]
```

Profile fields can include

### Personal

 Full name
 Profile photo
 Phone
 Location

### Education

 College
 Degree
 Course
 Graduation year

### Skills

 Technical skills
 Soft skills

### Professional Links

 GitHub
 LinkedIn
 Portfolio

### Resume

 Upload PDF

Keep onboarding progressive rather than showing one huge form.

---

# 16. Student Dashboard

The dashboard is the most important private page.

Desktop layout

```text
------------------------------------------------
VEXATRY                         Aman     Profile
------------------------------------------------

Dashboard
Applications
Internship
Certificate
Notifications
Settings

------------------------------------------------

Good morning, Aman.

Keep building your future.

[ Profile Completion 80% ]

------------------------------------------------

Application Status

Web Development Intern

Under Review

Applied 18 Sep 2026

[ View Application ]
------------------------------------------------

Current Internship

Web Development Intern

Day 18  60

████████████░░░░

[ View Internship ]
------------------------------------------------

Certificate

Status Not Available Yet

Your certificate will appear here
after successful completion.

------------------------------------------------
```

The dashboard should immediately answer

1. What is my application status
2. What internship am I doing
3. What do I need to do next
4. Do I have a certificate

---

# 17. Dashboard Sidebar

Desktop

```text
Overview
My Profile
Applications
My Internship
Certificate
Notifications
Settings
```

Bottom

```text
Help
Logout
```

Mobile

Use either

 Bottom navigation
 Slide-out navigation

Do not keep a large desktop sidebar on mobile.

---

# 18. My Applications

Page heading

```text
My Applications
```

Application cardstable

```text
Web Development Intern

Applied
18 Sep 2026

Status
Under Review

[ View Details ]
```

Possible statuses

```text
Applied
Under Review
Interview
Selected
Rejected
Withdrawn
```

Use subtle status indicators.

Do not use excessive colors.

---

# 19. Application Detail

Show

```text
Web Development Intern

Application ID
VG-2026-00124

Applied on
18 September 2026

Status
Under Review
```

Then show a timeline

```text
✓ Application Submitted
      18 Sep

✓ Application Received
      18 Sep

● Under Review
      Current

○ Interview

○ Final Decision
```

This should make the process transparent.

---

# 20. My Internship

Once a student is selected, their dashboard should change.

Example

```text
My Internship

Web Development Intern

Vexatry Global

01 Sep 2026 — 30 Nov 2026

Status
Active
```

Then

```text
Internship Progress

Day 21 of 90

██████████░░░░░░░

23%
```

Show

 Start date
 End date
 Duration
 Mentor
 Department
 Assigned tasks
 Progress
 Important announcements

---

# 21. Internship Completion

When the internship is successfully completed

Dashboard should show

```text
Congratulations!

Your internship has been completed.

Web Development Intern
Vexatry Global

[ View Certificate → ]
```

Use the spring green accent for the completed state.

---

# 22. Certificate Section

This is one of the core features of the portal.

Page heading

```text
My Certificate
```

If available

```text
Internship Certificate

Web Development Intern

Issued to
Aman Maurya

Internship Period
01 Sep 2026 — 30 Nov 2026

Certificate ID
VG-CERT-2026-00124

Issued on
01 Dec 2026

[ View Certificate ]
[ Download PDF ]
[ Verify Certificate ]
```

Certificate preview should be visually prominent.

---

# 23. Certificate Verification

Create a public page

```text
Verify a Vexatry Certificate
```

Description

```text
Verify the authenticity of an internship certificate
issued by Vexatry Global.
```

Input

```text
Enter Certificate ID

[ Verify Certificate → ]
```

Example

```text
VG-CERT-2026-00124
```

---

# 24. Valid Certificate Result

After verification

```text
Certificate Verified ✓

This certificate was issued by Vexatry Global.

Certificate ID
VG-CERT-2026-00124

Name
Aman Maurya

Internship
Web Development Intern

Duration
01 Sep 2026 — 30 Nov 2026

Issue Date
01 Dec 2026

Status
Verified
```

The verification page should be publicly accessible without requiring login.

---

# 25. Invalid Certificate

If the ID does not exist

```text
Certificate Not Found

We could not find a certificate matching this
certificate ID.

Please check the certificate ID and try again.
```

Do not reveal unnecessary database information.

---

# 26. Certificate QR Code

Every issued certificate should contain a QR code.

QR should point to

```text
certificateverifycertificate-id
```

Scanning the QR should open the public verification page.

The verification page should clearly display

```text
✓ Certificate Verified
```

This gives certificates a professional verification mechanism.

---

# 27. Certificate Download

The student should be able to download the official certificate PDF.

The certificate design should include

```text
VEXATRY GLOBAL

Certificate of Internship

This certificate is proudly presented to

STUDENT NAME

for successfully completing the

WEB DEVELOPMENT INTERNSHIP

from DATE to DATE.

Certificate ID VG-CERT-2026-00124

Authorized Signature
Vexatry Global
```

Certificate generation should be handled server-side.

---

# 28. Notifications

Student notification page

```text
Notifications
```

Examples

```text
Your application has been received.

Your interview has been scheduled.

You have been selected for the internship.

A new task has been assigned.

Your internship has been completed.

Your certificate is now available.
```

Unread notifications should have a subtle indicator.

---

# 29. Profile Page

Profile should look like a professional candidate profile.

```text
Aman Maurya

Web Development
[ Edit Profile ]

Education
...

Skills
HTML
CSS
JavaScript
Django

Resume
resume.pdf

Links
GitHub
LinkedIn
Portfolio
```

Allow students to edit their information.

---

# 30. Settings

Include

```text
Account Information
Change Password
Email Preferences
Delete Account
Logout
```

Keep settings simple.

---

# 31. Footer

Public footer

```text
VEXATRY GLOBAL

Internships that help you build real experience.

Internships
How It Works
Certificate Verification
FAQ
Contact

© 2026 Vexatry Global
```

Include a link back to the main Vexatry Global website.

---

# 32. Responsive Design

The entire portal must be responsive.

## Desktop

Use

 Sidebar dashboard
 Multi-column cards
 Large hero
 Wide content area

## Tablet

Reduce

 Card columns
 Typography
 Navigation spacing

## Mobile

Prioritize

 Single-column layout
 Large touch targets
 Bottomslide navigation
 Compact cards
 Sticky primary CTA where useful

The student should be able to apply for an internship entirely from a phone.

---

# 33. UI Components

Create reusable components for

 Navbar
 Footer
 Internship Card
 Status Badge
 Application Timeline
 Dashboard Card
 Progress Bar
 Profile Card
 Certificate Card
 Notification Item
 Modal
 Form Input
 Select
 Button
 Empty State
 Success State
 Error State
 Pagination

Do not duplicate UI markup unnecessarily.

---

# 34. Empty States

Every dashboard section should have a useful empty state.

Example

### No Applications

```text
You haven't applied for an internship yet.

Explore available opportunities and find
your next learning experience.

[ Explore Internships → ]
```

### No Certificate

```text
Your certificate will appear here
after successful completion of your internship.
```

Avoid blank pages.

---

# 35. Status Design

Use consistent statuses.

### Application

```text
Applied
Under Review
Interview
Selected
Rejected
```

### Internship

```text
Upcoming
Active
Completed
```

### Certificate

```text
Pending
Available
Verified
```

Use color only as a secondary visual indicator.

The status text must always remain readable without relying on color alone.

---

# 36. Accessibility

Follow basic accessibility principles

 Proper labels for forms
 Keyboard navigation
 Visible focus states
 Sufficient contrast
 Semantic HTML
 Accessible buttons
 Alt text for meaningful images
 Error messages associated with inputs
 Do not communicate information only through color

---

# 37. Animation

Animations should be minimal.

Allowed

 Small hover transitions
 Button transitions
 Card entrance animation
 Progress animation
 Subtle page transitions

Avoid

 Constant floating animations
 Excessive parallax
 Large page transitions
 Distracting effects

The portal should feel fast.

---

# 38. SEO

Public pages should have proper

 Title
 Meta description
 Canonical URL
 Open Graph metadata
 Structured data where appropriate

Important public pages

```text

 internships
 internshipsslug
 certificateverify
```

Student dashboard pages should generally not be indexed.

---

# 39. Security

Because students will have accounts and personal information, security is important.

Implement

 Secure authentication
 CSRF protection
 Password hashing
 Permission checks
 Private dashboard URLs
 Secure resume access
 Certificate ownership checks
 Rate limiting for certificate verification where appropriate
 Server-side validation
 File type validation
 File size limits
 Secure logout
 Protection against unauthorized certificate access

Never expose private student information through public URLs.

---

# 40. Important UX Principle

The portal should always answer

 What should I do next

For example

New user

```text
Complete your profile →
```

Profile completed

```text
Explore internships →
```

Applied

```text
Track your application →
```

Selected

```text
Start your internship →
```

Internship completed

```text
View your certificate →
```

This creates a clear student journey.

---

# 41. Complete User Journey

The intended experience is

```text
Visitor
   ↓
Explore Internships
   ↓
Register
   ↓
Complete Profile
   ↓
Apply
   ↓
Application Tracking
   ↓
Selected
   ↓
Internship Dashboard
   ↓
Complete Internship
   ↓
Certificate Issued
   ↓
View  Download Certificate
   ↓
Public Certificate Verification
```

---

# 42. Overall Design Personality

The final website should feel

Professional enough for a company



Friendly enough for students



Modern enough for a technology company



Simple enough for first-time users

The portal should NOT feel like

 A generic job board
 A college portal
 A coaching website
 A certificate-selling website
 A government portal
 A complicated enterprise dashboard

---

# 43. Final Visual Direction

Use the Vexatry visual identity consistently

```text
Background
#F9F9F7

Primary
#000000

Primary Accent
#EDFE5E

Secondary Accent
#BED4FB

Success
#31E992
```

Visual language

```text
Cream background
+
Black typography
+
Hairline borders
+
Lime CTAs
+
Bluegreen supporting accents
+
Large typography
+
Generous whitespace
+
Minimal shadows
+
Small-radius cards
```

The result should look like a dedicated Vexatry Global internship product, not a completely separate brand.
