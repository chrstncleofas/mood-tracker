import { useEffect, useState } from "react";
import Title from '../components/Title';
import Layout from "../components/Layout";
import Header from "../components/Header";
import MoodForm from "../components/MoodForm";
import Timeline from "../components/Timeline";
import MoodChart from "../components/MoodChart";

export default function Home(): JSX.Element {
  const [moods, setMoods] = useState<{ mood: string; note: string; date: string }[]>([]);
  const [pageTitle, setPageTitle] = useState('Mood Tracker');

  useEffect(() => {
    const savedMoods = localStorage.getItem("moods");
    if (savedMoods) {
      setMoods(JSON.parse(savedMoods));
    }
  }, []);

  const addMood = (mood: string, note: string) => {
    const date = new Date().toLocaleString();
    const newMoods = [{ mood, note, date }, ...moods];
    setMoods(newMoods);
    localStorage.setItem("moods", JSON.stringify(newMoods));
    setPageTitle(`Mood Tracker - ${mood}`);
  };

  return (
    <>
      <Title title={pageTitle} description="Track your daily moods and feelings." />
      <Layout>
        <Header title="Mood Tracker" />
        <MoodForm onAddMood={addMood} />
        <Timeline moods={moods} />
        <MoodChart moods={moods} />
      </Layout>
    </>
  );
}
