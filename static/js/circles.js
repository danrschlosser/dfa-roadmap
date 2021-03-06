var Segment = React.createClass({
  handleClick: function() {
    alert("hi");
  },
  render: function() {
    return (
      <path
        className="segment"
        d={this.props.data.d}
        id={this.props.data.id}/>
    );
  }
});

var Phase = React.createClass({
  render: function() {
    return (
      <g class="circle" id={ this.props.id }>
        {this.props.segments.map(function(segment) {
           return <Segement key={segment.id} data={segment}/>;
        })}
      </g>
    )
  }
});

var DesignRoadmapSvg = React.createClass({
  render: function() {
    var phases = [
      {
        id: "understand"
        segments: [
          {
            id: 1,
            d:"M165.5,62.2c-19-18.8-43.7-28.2-68.4-28.1L97,101.2c16.6,0,30.1,13.5,30.1,30.1 c0,5.5-1.5,10.6-4,15l58.2,33.5C202.8,142.5,197.6,94,165.5,62.2z"
          },
          {
            id: 2,
            d:"M66.9,131.3c0-16.6,13.5-30.1,30.1-30.1c0,0,0,0,0,0l0.1-67.1c-25,0-49.9,9.6-68.9,28.8 c-31.6,31.8-36.6,80-15.2,117l58-33.5C68.4,141.9,66.9,136.7,66.9,131.3z"
          },
          {
            id: 3,
            d:"M123.1,146.3c-5.2,9-14.9,15.1-26.1,15.1c-11.1,0-20.8-6-26-15l-58,33.5 c4.2,7.3,9.5,14.2,15.8,20.4c38.1,37.8,99.6,37.5,137.4-0.6c6-6.1,11.1-12.7,15.2-19.8L123.1,146.3z"
          }
        ]
      },
      {
        id: "create"
        segments: [
          {
            id: 1,
            d: "M355.3,161.1c-7.6,0-15.2-2.8-21-8.6c-5.8-5.8-8.7-13.3-8.8-20.9l-64.9-0.6c0,24.6,9.4,49.2,28.2,67.8 c18.1,17.9,41.5,27.1,65.1,27.6L355.3,161.1z"
          },
          {
            id: 2,
            d: "M353.9,226.5c25.6,0.6,51.4-9,70.9-28.7c17.9-18.1,27.3-41.4,28.1-64.9l-68.1-1.6c0,7.6-2.8,15.2-8.6,21 c-5.8,5.8-13.3,8.7-20.9,8.8L353.9,226.5z"
          },
          {
            id: 3,
            d: "M452.9,132.9c0.9-25.7-8.5-51.7-28.2-71.2c-18.8-18.6-43.4-27.8-68-27.6l-1.8,67.8 c7.6-0.1,15.3,2.8,21.1,8.6c5.8,5.8,8.7,13.3,8.8,20.9L452.9,132.9z"
          },
          {
            id: 4,
            d: "M325.5,131.7c0-7.6,2.8-15.2,8.6-21c5.7-5.8,13.3-8.7,20.8-8.8l1.8-67.8c-24.6,0.2-49.2,9.8-68,28.7 c-18.8,18.9-28.1,43.6-28.1,68.2L325.5,131.7z"
          }
        ]
      }
      {
        id: "create"
        segments: [
          {
            id: 1,
            d: "M587.8,124c3.7-12.1,15-20.9,28.3-20.9l0.3-68.9c-43,0-79.4,28.5-91.5,67.8L587.8,124z"
          },
          {
            id: 2,
            d: "M633.2,156.9c-4.8,3.4-10.7,5.4-17.1,5.4c-7.2,0-13.8-2.6-19-6.9l-40.6,50.6 c16.4,13.2,37.2,21.1,59.8,21.1c22.6,0,43.4-7.9,59.8-21.1L633.2,156.9z"
          },
          {
            id: 3,
            d: "M597.2,155.4c-6.5-5.4-10.7-13.6-10.7-22.8c0-3,0.5-6,1.3-8.7l-62.9-22c-2.8,9.1-4.3,18.7-4.3,28.7 c0,30.5,14.1,57.7,36,75.4L597.2,155.4z"
          },
          {
            id: 4,
            d: "M676.3,206.1c22-17.7,36-44.9,36-75.4c0-10.7-1.7-21-4.9-30.6l-63.9,21.1c1.5,3.5,2.3,7.4,2.3,11.5 c0,10-5,18.8-12.5,24.2L676.3,206.1z"
          },
          {
            id: 5,
            d: "M707.4,100c-12.7-38.3-48.6-65.9-90.9-65.9l-0.3,68.9c12.3,0,22.8,7.5,27.3,18.1L707.4,100z"
          }
        ]
      }
    ]

    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 771.2 250.9"
        enable-background="new 0 0 771.2 250.9"
        xml:space="preserve">
        {phases.map(function(phase) {
          return (
            <Phase
              key={phase.id}
              id={phase.id}
              segments={phase.segments} />
          );
        })}
      </svg>
    );
  }
});