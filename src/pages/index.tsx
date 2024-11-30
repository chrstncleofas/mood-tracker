import { useState } from 'react';
import Layout from '../components/Layout';
import MoodForm from '../components/MoodForm';
import Timeline from '../components/Timeline';
import Header from '../components/Header';

export default function Home(): JSX.Element {
  const [moods, setMoods] = useState<{ mood: string; note: string; date: string }[]>([]);

  const addMood = (mood: string, note: string) => {
    const date = new Date().toLocaleString();
    setMoods([{ mood, note, date }, ...moods]);
  };

  return (
    <Layout>
       <Header title={"Mood Tracker"} />
      <MoodForm onAddMood={addMood} />
      <Timeline moods={moods} />
    </Layout>
  );
}
