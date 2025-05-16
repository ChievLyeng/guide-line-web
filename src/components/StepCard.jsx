import Card from "react-bootstrap/Card";

const StepCard = ({ step, description, image }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>Step {step}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {image && (
          <div className="text-center">
            <img
              src={image}
              alt={`Step ${step}`}
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default StepCard;
