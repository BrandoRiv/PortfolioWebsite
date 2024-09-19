import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "./data/portfolio";

function Portfolio() {
  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-3xl font-bold text-center my-8">Projects</h1>
      <div className="flex flex-col gap-4 px-8 py-9 h-full bg-slate-500">
        {portfolioData.map((item) => (
          <PortfolioItem
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            stack={item.stack}
            description={item.description}
            link={item.link}
            github={item.github}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;