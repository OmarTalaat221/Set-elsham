const ContactMap = () => {
  return (
    <div className="map-area overflow-hidden">
      <div className="map-sec">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.824623450779!2d46.876808000000004!3d24.595247999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa700067e9af3%3A0x783af573a59546e0!2z2YXYtdmG2Lkg2YXYp9iq2LHZitmD2LMg2YTZhNin2KvYp9ir!5e0!3m2!1sar!2seg!4v1770557932438!5m2!1sar!2seg"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
