import React, { useState } from "react";
import { Range } from "react-range";

const TwoThumbRangeForm = ({ values, setValues }) => {
  return (
    <div style={{ margin: "5px" }}>
      <Range
        step={1}
        min={0}
        max={500}
        values={values}
        onChange={(newValues) => setValues(newValues)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "3px",
              width: "20%",
              backgroundColor: " #2cb1ba",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ index, props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "10px",
              width: "10px",
              backgroundColor: index === 0 ? " #2cb1ba" : " #2cb1ba",
            }}
          />
        )}
      />
      <div style={{ marginTop: "10px" }}>
        <p style={{ fontSize: "14px" }}>
          Prix: {values[0]}€ - {values[1]}€
        </p>
      </div>
    </div>
  );
};

export default TwoThumbRangeForm;
