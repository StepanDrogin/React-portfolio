import "./systemMap.css";

const nodes = [
  { x: 114, y: 112, label: "PRODUCT", tone: "mist" },
  { x: 354, y: 72, label: "UX / UI", tone: "teal" },
  { x: 602, y: 142, label: "FRONTEND", tone: "lavender" },
  { x: 626, y: 370, label: "BACKEND", tone: "mist" },
  { x: 390, y: 468, label: "DATA", tone: "teal" },
  { x: 126, y: 402, label: "DEVOPS", tone: "lavender" },
];

export default function SystemMap() {
  return (
    <div className="system-map" data-ambient aria-hidden="true">
      <div className="system-map__grid" />
      <svg
        className="system-map__svg"
        fill="none"
        focusable="false"
        viewBox="0 0 720 540"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="system-map__connections">
          {nodes.map((node) => (
            <path
              className="system-map__path"
              d={`M360 270L${node.x} ${node.y}`}
              key={node.label}
              pathLength="1"
            />
          ))}
          <path
            className="system-map__orbit"
            d="M119 112C217 1 463 7 602 142C713 250 700 397 557 461C404 530 186 484 126 402C51 299 48 192 119 112Z"
            pathLength="1"
          />
        </g>

        <g className="system-map__core">
          <circle cx="360" cy="270" r="86" />
          <circle cx="360" cy="270" r="62" />
          <text x="360" y="261" textAnchor="middle">
            AI
          </text>
          <text className="system-map__core-caption" x="360" y="290" textAnchor="middle">
            SYSTEM LAYER
          </text>
        </g>

        {nodes.map((node, index) => (
          <g
            className={`system-map__node system-map__node--${node.tone}`}
            key={node.label}
            style={{
              "--node-delay": `${index * -420}ms`,
              "--pulse-delay": `${index * -260}ms`,
            }}
            transform={`translate(${node.x} ${node.y})`}
          >
            <circle className="system-map__node-pulse" r="25" />
            <circle className="system-map__node-dot" r="7" />
            <text y="44" textAnchor="middle">
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      <div className="system-map__status">
        <span className="ui-span system-map__status-dot" />
        <span className="ui-span system-map__status-text">Production ready</span>
      </div>
    </div>
  );
}
