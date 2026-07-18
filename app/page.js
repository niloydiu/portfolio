"use client";

import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { useEffect, useState } from "react";
import { workData as staticWork, serviceData as staticService, infoList as staticInfo } from "@/assets/assets";

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [workData, setWorkData] = useState(staticWork);
  const [serviceData, setServiceData] = useState(staticService);
  const [infoList, setInfoList] = useState(staticInfo);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    // Hydrate portfolio data dynamically from DB
    fetch("/api/portfolio")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("DB offline");
      })
      .then((data) => {
        if (data.workData) setWorkData(data.workData);
        if (data.serviceData) setServiceData(data.serviceData);
        if (data.infoList) setInfoList(data.infoList);
      })
      .catch((err) => console.log("Hydration fallback: using static data", err));
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
        <Header isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} infoList={infoList} />
        <Services isDarkMode={isDarkMode} serviceData={serviceData} />
        <Work isDarkMode={isDarkMode} workData={workData} />
        <Blog />
        <Contact isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
