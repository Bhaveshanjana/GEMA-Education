# Student Assessment Report Page

This project is a React-based frontend assignment designed to display student speaking assessment results. It features dynamic score conversions (IELTS, TOEFL, PTE, etc.), visual data representation, and logic-based descriptive feedback.

## How to Run the Project

1.  **Clone the repository or download zip:**

    ```bash
    git clone <your-repo-link>
    cd <project-folder-name>
    unzip the downloaded zip
    cd <unziped location>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    npm start
    ```

---

## Folder Structure

```text
src/
├── components/
│   ├── FeedBack.tsx       # Displays descriptive feedback based on scores
│   ├── ScoreSummary.tsx   # Main dashboard showing the score circle and bars
│   ├── SkillBar.tsx       # Reusable progress bar component for individual skills
│   └── scoreTabs.tsx      # Tab navigation for exam types
├── constants/
│   └── scoreScale.ts      # Definitions for exam scales (IELTS max 9, TOEFL max 120, etc.)
├── types/
│   └── ReportData.ts      # TypeScript interfaces for the student data structure
├── utils/
│   └── scoreConverter.ts  # Logic to convert raw scores into different exam formats
├── App.tsx                # Entry point of app
└── report.json            # The data source containing student scores
```

### Example Data Structure (report.json):

```
{
  "studentName": "John Doe",
  "overallScore": 5,
  "skills": {
    "pronunciation": { "score": 7 },
    "fluency": { "score": 8 },
    "vocabulary": { "score": 2 },
    "grammar": { "score": 1 }
  }
}
```

### How the Logic Works

#### 1. Feedback Logic

- The feedback text in FeedBack.tsx is generated dynamically based on specific score ranges. It does not rely on static text from the database.

- Condition Rules:

- Score ≥ 8: Returns "Excellent performance with strong control."

- Score 6 - 7: Returns "Good performance with minor inaccuracies."

- Score < 6: Returns "Needs improvement."

This logic ensures that if a student's score changes in the JSON, the descriptive text updates automatically to match.

#### 2. Score Conversion Logic

- The application can convert the base score (out of 9) into other exam formats (IELTS, TOEFL, PTE, etc.) using the scoreConverter.ts utility.

- It uses a standard ratio calculation: (BaseScore / 9) \* MaxScore of Target Exam.

- Example: A score of 5/9 in SpeechAce converts to approximately 67/120 in TOEFL.

CEFR Exception: CEFR scores are mapped to levels (A2, B1, B2, C1, C2) based on fixed thresholds rather than mathematical division.

#### 3. Dynamic Coloring

- In ScoreSummary.tsx, the main score circle changes color based on performance:

- Green: High scores (≥ 80%)

- Yellow: Average scores (60% - 79%)

- Red: Low scores (< 60%)

### Tech Stack

Framework: React-TypeScript

Styling: Tailwind CSS
