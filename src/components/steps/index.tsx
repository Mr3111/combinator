import { Button, message, Steps } from "antd";
import { useState } from "react";
import "./styles.scss";
import Select from "../select";
import { SmileOutlined } from "@ant-design/icons";
import Summary from "../summary";

const { Step } = Steps;
const steps = [
  {
    title: "Frontend",
    // description: 'Select a frontend framework',
    content: <Select
      id="fe"
      options={[
        { key: "1", value: "react", label: "React" },
        { key: "2", value: "angular", label: "Angular" },
        { key: "3", value: "vue", label: "Vue" },
        { key: "5", value: "svelte", label: "Svelte" },
      ]}
      placeholder={"Select a frontend framework"}
      onChange={(value) => {
        message.success(`You have selected ${value}`);
      }
      }
    />,
  },
  {
    title: "Backend",
    // description: 'Select a backend framework',
    content: <Select
      id="be"
      options={[
        { key: "1", value: "node", label: "Node.js" },
        { key: "2", value: "spring", label: "Spring Boot" },
        { key: "3", value: "flask", label: "Flask" },
        { key: "5", value: "scala", label: "Scala" },
      ]}
      placeholder={"Select a backend framework"}
      onChange={(value) => {
        message.success(`You have selected ${value}`);
      }
      }
    />,
  },
  {
    title: "Database",
    // description: 'Select a database',
    content: <Select
      id="db"
      options={[
        { key: "1", value: "mysql", label: "MySQL" },
        { key: "2", value: "mongo", label: "MongoDB" },
        { key: "3", value: "prisma", label: "Prisma" },
        { key: "5", value: "redis", label: "Redis" },
      ]}
      placeholder={"Select a database"}
      onChange={(value) => {
        message.success(`You have selected ${value}`);
      }
      }
    />,
  },
  {
    title: "Deployment",
    content: <Select
      id="de"
      options={[
        { key: "1", value: "github", label: "Github Actions" },
        { key: "2", value: "azure", label: "Azure Pipelines" },
        { key: "3", value: "aws", label: "AWS" },
      ]}
      placeholder={"Select a deployment strategy"}
      onChange={(value) => {
        message.success(`You have selected ${value}`);
      }
      }
    />,
  },
  {
    title: "Done",
    icon: <SmileOutlined />,
    content: <Summary />,
  },
];

const AppSteps = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} icon={item.icon}/>
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success("Processing complete!")}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default AppSteps;
