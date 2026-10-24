import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { QuizResult, University } from '../types/admissions';

export interface CounselingInquiryPayload {
  studentName: string;
  studentClass?: string;
  phone?: string;
  content: string;
  targetMajor?: string;
}

// Save Quiz Result to Firestore
export async function saveQuizResultToFirestore(userId: string, result: QuizResult): Promise<string> {
  const resultId = `result_${Date.now()}`;
  const path = `users/${userId}/quizResults/${resultId}`;

  try {
    const docRef = doc(db, 'users', userId, 'quizResults', resultId);
    await setDoc(docRef, {
      id: resultId,
      userId,
      primaryType: result.primaryType,
      secondaryType: result.secondaryType,
      tertiaryType: result.tertiaryType,
      code: result.code,
      scores: result.scores,
      selectedSubjects: result.selectedSubjects || [],
      targetScoreRange: result.targetScoreRange || '',
      createdAt: serverTimestamp(),
    });
    return resultId;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

// Fetch Quiz History for User
export async function fetchUserQuizHistory(userId: string) {
  const path = `users/${userId}/quizResults`;
  try {
    const colRef = collection(db, 'users', userId, 'quizResults');
    const q = query(colRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => doc.data());
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

// Save Bookmarked University to Firestore
export async function saveUniversityToFirestore(userId: string, uni: University): Promise<void> {
  const path = `users/${userId}/savedUniversities/${uni.id}`;
  try {
    const docRef = doc(db, 'users', userId, 'savedUniversities', uni.id);
    await setDoc(docRef, {
      universityId: uni.id,
      universityCode: uni.code,
      universityName: uni.name,
      savedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

// Remove Bookmarked University from Firestore
export async function removeUniversityFromFirestore(userId: string, universityId: string): Promise<void> {
  const path = `users/${userId}/savedUniversities/${universityId}`;
  try {
    const docRef = doc(db, 'users', userId, 'savedUniversities', universityId);
    await deleteDoc(docRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

// Fetch all saved university IDs for user
export async function fetchUserSavedUniversities(userId: string): Promise<string[]> {
  const path = `users/${userId}/savedUniversities`;
  try {
    const colRef = collection(db, 'users', userId, 'savedUniversities');
    const snapshot = await getDocs(colRef);
    return snapshot.docs.map((doc) => doc.id);
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

// Submit Inquiry to School Counselor
export async function submitCounselingInquiry(
  userId: string,
  payload: CounselingInquiryPayload
): Promise<string> {
  const inquiryId = `inq_${Date.now()}`;
  const path = `inquiries/${inquiryId}`;
  try {
    const docRef = doc(db, 'inquiries', inquiryId);
    await setDoc(docRef, {
      id: inquiryId,
      userId,
      studentName: payload.studentName.trim(),
      studentClass: payload.studentClass?.trim() || '',
      phone: payload.phone?.trim() || '',
      content: payload.content.trim(),
      targetMajor: payload.targetMajor?.trim() || '',
      status: 'pending',
      createdAt: serverTimestamp(),
    });
    return inquiryId;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}
