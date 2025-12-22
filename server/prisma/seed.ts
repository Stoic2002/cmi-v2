import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { allCourses, cefrA1CanDo, cefrA2CanDo, cefrB1CanDo, cefrB2CanDo, cefrC1CanDo, cefrC2CanDo } from './seed-data';
import { topicsData } from './seed-data/topics-data';
import { scenariosData } from './seed-data/scenarios-data';
import { exercisesData } from './seed-data/exercises-data';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting CEFR Phase 1 (A1) curriculum seeding...');

    // Clear existing data
    await prisma.guidedSession.deleteMany();
    await prisma.exercise.deleteMany();
    await prisma.scenario.deleteMany();
    await prisma.topic.deleteMany();
    await prisma.userAchievement.deleteMany();
    await prisma.quizAttempt.deleteMany();
    await prisma.userProgress.deleteMany();
    await prisma.aIConversation.deleteMany();
    await prisma.quiz.deleteMany();
    await prisma.lesson.deleteMany();
    await prisma.course.deleteMany();
    await prisma.achievement.deleteMany();
    await prisma.user.deleteMany();

    console.log('✓ Cleared existing data');

    // Create demo users
    const hashedPassword = await bcrypt.hash('password123', 10);

    await prisma.user.create({
        data: {
            email: 'demo@cmi.com',
            password: hashedPassword,
            name: 'Demo User',
            targetLanguage: 'ja',
            currentLevel: 'A1',
            goal: 'work',
            xp: 150,
            streak: 5,
            lastActiveDate: new Date(),
        },
    });

    await prisma.user.create({
        data: {
            email: 'korea@cmi.com',
            password: hashedPassword,
            name: 'Korea Learner',
            targetLanguage: 'ko',
            currentLevel: 'A1',
            goal: 'work',
            xp: 0,
            streak: 0,
            lastActiveDate: new Date(),
        },
    });

    await prisma.user.create({
        data: {
            email: 'english@cmi.com',
            password: hashedPassword,
            name: 'English Learner',
            targetLanguage: 'en',
            currentLevel: 'A1',
            goal: 'work',
            xp: 0,
            streak: 0,
            lastActiveDate: new Date(),
        },
    });

    console.log('✓ Created demo users');

    // Create achievements for CEFR levels
    await Promise.all([
        prisma.achievement.create({
            data: {
                name: 'First Steps',
                nameId: 'Langkah Pertama',
                description: 'Complete your first lesson',
                descriptionId: 'Selesaikan pelajaran pertama',
                icon: '🎯',
                condition: { type: 'lessons_completed', value: 1 },
                xpReward: 50,
            },
        }),
        prisma.achievement.create({
            data: {
                name: 'Week Warrior',
                nameId: 'Pejuang Mingguan',
                description: 'Maintain a 7-day streak',
                descriptionId: 'Pertahankan streak 7 hari',
                icon: '🔥',
                condition: { type: 'streak', value: 7 },
                xpReward: 100,
            },
        }),
        prisma.achievement.create({
            data: {
                name: 'Quiz Master',
                nameId: 'Master Quiz',
                description: 'Answer 50 quizzes correctly',
                descriptionId: 'Jawab 50 quiz dengan benar',
                icon: '🏆',
                condition: { type: 'quizzes_correct', value: 50 },
                xpReward: 200,
            },
        }),
        prisma.achievement.create({
            data: {
                name: 'A1 Complete - Japanese',
                nameId: 'A1 Selesai - Jepang',
                description: 'Complete all A1 Japanese courses (JLPT N5)',
                descriptionId: 'Selesaikan semua kursus A1 Jepang (JLPT N5)',
                icon: '🇯🇵',
                condition: { type: 'level_completed', value: { language: 'ja', level: 'A1' } },
                xpReward: 500,
            },
        }),
        prisma.achievement.create({
            data: {
                name: 'A1 Complete - Korean',
                nameId: 'A1 Selesai - Korea',
                description: 'Complete all A1 Korean courses (TOPIK 1)',
                descriptionId: 'Selesaikan semua kursus A1 Korea (TOPIK 1)',
                icon: '🇰🇷',
                condition: { type: 'level_completed', value: { language: 'ko', level: 'A1' } },
                xpReward: 500,
            },
        }),
        prisma.achievement.create({
            data: {
                name: 'A1 Complete - English',
                nameId: 'A1 Selesai - Inggris',
                description: 'Complete all A1 English courses',
                descriptionId: 'Selesaikan semua kursus A1 Inggris',
                icon: '🇬🇧',
                condition: { type: 'level_completed', value: { language: 'en', level: 'A1' } },
                xpReward: 500,
            },
        }),
        prisma.achievement.create({
            data: {
                name: 'Chatterbox',
                nameId: 'Tukang Ngobrol',
                description: 'Have 10 AI conversations',
                descriptionId: 'Lakukan 10 percakapan dengan AI',
                icon: '💬',
                condition: { type: 'conversations', value: 10 },
                xpReward: 100,
            },
        }),
    ]);
    console.log('✓ Created achievements');

    // Create all courses (A1 + A2)
    let totalCourses = 0;
    let totalLessons = 0;
    let totalQuizzes = 0;

    for (const courseData of allCourses) {
        const { lessons, canDo, ...courseInfo } = courseData;

        // Use appropriate CEFR Can-Do based on level
        const defaultCanDo = courseInfo.level === 'C2' ? cefrC2CanDo :
            courseInfo.level === 'C1' ? cefrC1CanDo :
                courseInfo.level === 'B2' ? cefrB2CanDo :
                    courseInfo.level === 'B1' ? cefrB1CanDo :
                        courseInfo.level === 'A2' ? cefrA2CanDo : cefrA1CanDo;

        const course = await prisma.course.create({
            data: {
                ...courseInfo,
                canDo: canDo || defaultCanDo,
            },
        });
        totalCourses++;

        for (const lessonData of lessons) {
            const { quizzes, ...lessonInfo } = lessonData;

            const lesson = await prisma.lesson.create({
                data: {
                    ...lessonInfo,
                    courseId: course.id,
                },
            });
            totalLessons++;

            if (quizzes) {
                for (const quizData of quizzes) {
                    await prisma.quiz.create({
                        data: {
                            ...quizData,
                            lessonId: lesson.id,
                            xpReward: 5,
                        },
                    });
                    totalQuizzes++;
                }
            }
        }
    }

    console.log('✓ Created CEFR curriculum');

    // Create AI Tutor Topics
    for (const topicData of topicsData) {
        await prisma.topic.create({
            data: topicData,
        });
    }
    console.log(`✓ Created ${topicsData.length} AI Tutor topics`);

    // Create AI Tutor Scenarios
    for (const scenarioData of scenariosData) {
        await prisma.scenario.create({
            data: scenarioData,
        });
    }
    console.log(`✓ Created ${scenariosData.length} AI Tutor scenarios`);

    // Create Interactive Exercises
    for (const exerciseData of exercisesData) {
        await prisma.exercise.create({
            data: exerciseData,
        });
    }
    console.log(`✓ Created ${exercisesData.length} interactive exercises`);

    // Summary
    const achievementCount = await prisma.achievement.count();

    console.log(`
╔═══════════════════════════════════════════════════════════╗
║     CMI Learning - CEFR Phase 1 (A1) Complete!            ║
╠═══════════════════════════════════════════════════════════╣
║   CEFR Level:     A1 (Beginner)                           ║
║   Languages:      Japanese (JLPT N5), Korean (TOPIK 1),   ║
║                   English                                  ║
╠═══════════════════════════════════════════════════════════╣
║   Total Courses:     ${totalCourses.toString().padStart(3)}                                   ║
║   Total Lessons:     ${totalLessons.toString().padStart(3)}                                   ║
║   Total Quizzes:     ${totalQuizzes.toString().padStart(3)}                                   ║
║   Achievements:      ${achievementCount.toString().padStart(3)}                                   ║
╠═══════════════════════════════════════════════════════════╣
║   Demo Accounts:                                          ║
║   demo@cmi.com (Japanese A1)                              ║
║   korea@cmi.com (Korean A1)                               ║
║   english@cmi.com (English A1)                            ║
║   Password: password123                                   ║
╚═══════════════════════════════════════════════════════════╝
    `);
}

main()
    .catch((e) => {
        console.error('Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
