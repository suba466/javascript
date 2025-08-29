import { useState } from "react";
import { profile } from './profile.jsx';
import Box1 from './Box1.jsx';
import Box2 from './Box2.jsx';
import Box3 from './Box3.jsx';

function Task1() {
  const [theme, setTheme] = useState({
    comp1: { backclr: "cadetblue", clr: "brown",border: "none" },
    comp2: { backclr: "black", clr: "white",border: "none" },
    comp3: { backclr: "lightblue", clr: "purple",border: "none" }
  });

  const changeBackground = () => {
    setTheme((prev) => ({
      comp1: { ...prev.comp1, backclr: "#000066",border: "none"  },
      comp2: { ...prev.comp2, backclr: "#000066",border: "none"  },
      comp3: { ...prev.comp3, backclr: "#000066",border: "none"  }
    }));
  };

  const changeTextcolor = () => {
    setTheme((prev) => ({
      comp1: { ...prev.comp1, clr: "#fefeffff",border: "none"  },
      comp2: { ...prev.comp2, clr: "#f8f8f8ff",border: "none"  },
      comp3: { ...prev.comp3, clr: "#fcfcfcff",border: "none"  }
    }));
  };

  const design = () => {
    setTheme((prev) => ({
      comp1: { ...prev.comp1,backclr: "#660033", clr: "#ffffff", border: "5px solid black" },
      comp2: { ...prev.comp2,backclr: "#cc3300", clr: "#ffffff", border: "2px solid black" },
      comp3: { ...prev.comp3,backclr: "#d92b82ff", clr: "#ffffff", border: "5px solid black" }
    }));
  };

  return (<>
    <h2 style={{textAlign:"center"}}>Updation Task</h2>
    <div style={{display:"flex"}}>
    <profile.Provider value={{ theme, changeBackground, changeTextcolor, design }}>
      <Box1 />
      <Box2 />
      <Box3 />
    </profile.Provider></div></>
  );
}

export default Task1;
