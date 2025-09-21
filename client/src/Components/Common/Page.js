import React from "react";

function Page() {
  return (
    <section className="service-container">
      <h2 className="section-title wow fadeIn animated" data-wow-delay=".03s">
        Election Campaigning
      </h2>

      <div className="row">
        {renderServiceCard(
          "Data and AI",
          "Data fuels the modern enterprise. We provide you with the expertise and tools to transform your data into actionable insights that enhance business operations.",
          "https://www.msrcosmos.com/data-analytics"
        )}

        {renderServiceCard(
          "Generative AI",
          "Discover cutting-edge Generative AI Services, featuring a rapid approach, tailored solutions, and strategic partnerships to empower your business.",
          "https://www.msrcosmos.com/services/generative-ai-services/"
        )}
      </div>

      <div className="row">
        {renderImageCard(
          "Cloud",
          "Get enhanced flexibility, scalability, and compliance. We partner with you to deliver the cloud infrastructure and resources needed to support enterprise agility.",
          "https://www.msrcosmos.com/wp-content/uploads/2023/07/Cloud-Services-Azure-AWS-GCP-Services.webp",
          "https://www.msrcosmos.com/cloud"
        )}

        {renderImageCard(
          "Enterprise Applications",
          "From ERP consulting to modernizing web applications and custom integrations, we help you optimize workflows that are aligned to your strategic business objectives.",
          "https://www.msrcosmos.com/wp-content/uploads/2023/07/Entrprise-Applications-Services.webp",
          "https://www.msrcosmos.com/enterprise-applications"
        )}

        {renderImageCard(
          "Automation",
          "Using “digital workers” and RPA technologies, we can help you automate and scale your business processes in a more cost-effective fashion.",
          "https://www.msrcosmos.com/wp-content/uploads/2023/07/Intelligent-Automation-Services.webp",
          "https://www.msrcosmos.com/services/robotic-process-automation/"
        )}
      </div>
    </section>
  );
}

// Helper function to generate service card
function renderServiceCard(title, description, link) {
  return (
    <div className="col-md-12 col-lg-6 mb-4">
      <div className="card wow fadeIn animated" data-wow-delay=".03s">
        {/* ... (Rest of your card structure) */}
      </div>
    </div>
  );
}

// Helper function to generate image card
function renderImageCard(title, description, imageUrl, link) {
  return (
    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <div className="card h-100 wow fadeIn animated" data-wow-delay=".03s">
        {/* ... (Rest of your card structure) */}
      </div>
    </div>
  );
}

export default Page;
