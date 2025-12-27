"use client";

export default function MenuTabNav({ sections, activeName, onSelect }) {
  return (
    <nav className="pt-3">
      <div
        className="nav nav-tabs d-flex w-100 justify-content-center"
        role="tablist">
        {sections.map((section) => {
          const isActive = activeName === section.name;

          return (
            <button
              key={section.id}
              className={`nav-link col text-secondary fs-md-5 ${
                isActive ? "active" : ""
              }`}
              type="button"
              onClick={() => onSelect(section)}
              aria-selected={isActive}>
              {section.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
