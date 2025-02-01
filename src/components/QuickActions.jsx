import Button from "../components/ui/Button";

const QuickActions = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex gap-4">
      <Button variant="default">Start Campaign</Button>
      <Button variant="default">Stop Campaign</Button>
      <Button variant="default">Optimize Budget</Button>
      <Button variant="default">View Recommendations</Button>
    </div>
  );
};

export default QuickActions;