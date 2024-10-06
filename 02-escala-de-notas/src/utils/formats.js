export function formatGrade({ gradeData }) {
    return {
        maxScore: parseFloat(gradeData.maxScore),
        maxGrade: parseFloat(gradeData.maxGrade),
        minGrade: parseFloat(gradeData.minGrade),
        approvalGrade: parseFloat(gradeData.approvalGrade),
        exigency: parseFloat(gradeData.exigency) / 100,
        increment: parseFloat(gradeData.increment),
        order: gradeData.order
    };
}
