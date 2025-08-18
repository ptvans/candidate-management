# Interview Scoring Guides

## Overview
The Interview Scoring Guides feature allows users to create and manage scoring guides for technical interviews. This is a scripted prototype that simulates an AI-assisted document creation process.

## Features

### Guides Index Page (`/guides`)
- **Landing Page**: Lists all existing interview scoring guides
- **Search & Filter**: Search by title/role and filter by status
- **Sort Options**: Sort by last modified, created date, or title
- **Create Button**: Navigate to the New Guide creation page
- **Guide Cards**: Display guide information with metadata and statistics

### New Guide Creation Page (`/guides/new`)
- **AI Helper Chat Interface**: Scripted interaction to guide users through guide creation
- **Document Editor**: Real-time document composition with editable sections
- **50/50 Layout**: Left panel (AI chat) and right panel (document editor) are each 50% width
- **Scripted Flow**: Pre-defined conversation that simulates AI assistance

## How to Use

### 1. Navigation
- Click on "Guides" in the left sidebar to access the guides index
- Use the "Create Guide" button to start creating a new guide

### 2. Creating a Guide
1. **Start the Conversation**: Click the "Next" button to begin the AI interaction
2. **Select Role**: Choose the engineering role from the predefined options
3. **Follow the Script**: Continue clicking "Next" to advance through the conversation
4. **Watch Document Updates**: The right panel will automatically populate with content
5. **Edit Content**: Modify any section directly in the text areas
6. **Save**: Click the Save button to preserve your changes

### 3. Scripted Flow
The prototype follows this conversation sequence:
1. AI introduces the guide creation process
2. User selects a role (e.g., Fullstack Engineer)
3. AI shows the document outline
4. AI asks for evaluation criteria
5. AI provides sample criteria
6. Document sections are populated accordingly

## Technical Details

### Components
- **GuidesIndex.tsx**: Landing page with guide list and search/filter functionality
- **Guides.tsx**: New guide creation page with AI chat and document editor
- **GuidesIndex.css**: Styling for the guides index page
- **Guides.css**: Styling for the guide creation page

### Layout
- **Compact Sidebar**: 64px width with icon-only navigation
- **50/50 Panel Split**: Both panels are fixed at 50% width for simplicity
- **Responsive Design**: Adapts to different screen sizes

### State Management
- **Guides Index**: Search terms, filters, and sorting preferences
- **Guide Creation**: Current conversation step, selected role, and document content

## Future Enhancements
- **Panel Resizing**: Add draggable resize handle between panels
- **Real AI Integration**: Replace scripted responses with actual AI
- **Guide Templates**: Pre-built templates for common roles
- **Collaboration**: Share and edit guides with team members
- **Export Functionality**: PDF, Word, or other format export
- **Version History**: Track changes and revisions

## Notes
This is a prototype designed to demonstrate the user experience and interface design. The AI responses are pre-scripted and the document updates are simulated for demonstration purposes. The panel layout is simplified to 50/50 split for now, with plans to add resizing functionality later.
