

function AlertBox() {
  return (
    <div
      className="alert alert-warning d-flex justify-content-end"
      style={{
        height: "28px",
        padding: "0",
        marginBottom: "10px",
      }}
    >
      <button
        type="button"
        className="btn-close"
        style={{ fontSize: "9px", padding: "8px" }}
      ></button>
    </div>
  );
}

function InputField({ label, placeholder, suffix }) {
  return (
    <div style={{ marginBottom: "8px" }}>
      <label
        className="form-label"
        style={{
          fontSize: "12px",
          marginBottom: "4px",
          display: "block",
        }}
      >
        {label}
      </label>

      <div className="input-group">
       

        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          style={{
            height: "25px",
            fontSize: "11px",
          }}
        />

        {suffix && (
          <span
            className="input-group-text"
            style={{
              height: "25px",
              fontSize: "11px",
              padding: "2px 8px",
              backgroundColor: "#e9ecef",
            }}
          >
            {suffix}
          </span>
        )}
      </div>

      <small
        className="text-muted"
        style={{
          fontSize: "9px",
        }}
      >
        Phải nhập 5 ký tự, in hoa...
      </small>
    </div>
  );
}

function SelectField({ label }) {
  return (
    <div className="col-6">
      <label
        className="form-label"
        style={{
          fontSize: "12px",
          marginBottom: "4px",
        }}
      >
        {label}
      </label>

      <select
        className="form-select"
        style={{
          height: "25px",
          fontSize: "11px",
          paddingTop: "2px",
          paddingBottom: "2px",
        }}
      >
        <option>Hà nội</option>
        <option>Đà Nẵng</option>
        <option>Hồ Chí Minh</option>
      </select>
    </div>
  );
}

function RoundTrip() {
  return (
    <div style={{ marginBottom: "12px" }}>
      <label
        style={{
          fontSize: "12px",
          display: "block",
          marginBottom: "3px",
        }}
      >
        Chọn chiều đi (Khứ hồi)
      </label>

      <div className="form-check" style={{ minHeight: "18px" }}>
        <input
          className="form-check-input"
          type="checkbox"
          id="di"
          style={{
            width: "12px",
            height: "12px",
            marginTop: "3px",
          }}
        />

        <label
          className="form-check-label"
          htmlFor="di"
          style={{ fontSize: "11px" }}
        >
          Đi
        </label>
      </div>

      <div className="form-check" style={{ minHeight: "18px" }}>
        <input
          className="form-check-input"
          type="checkbox"
          id="ve"
          style={{
            width: "12px",
            height: "12px",
            marginTop: "3px",
          }}
        />

        <label
          className="form-check-label"
          htmlFor="ve"
          style={{ fontSize: "11px" }}
        >
          Về
        </label>
      </div>
    </div>
  );
}

function SubmitButton() {
  return (
    <button
      className="btn btn-primary w-100"
      style={{
        height: "25px",
        padding: "0",
        fontSize: "11px",
        borderRadius: "3px",
      }}
    >
      Đặt vé
    </button>
  );
}

function BookingForm() {
  return (
    <div
      style={{
        width: "420px",
        marginLeft: "35px",
        padding: "10px",
        border: "1px solid #777",
        backgroundColor: "#fff",
      }}
    >
      <AlertBox />

      <h1
        style={{
          fontSize: "28px",
          fontWeight: "500",
          color: "#1d2939",
          marginBottom: "8px",
        }}
      >
        Form đặt vé máy bay
      </h1>

      <InputField
        label="Họ tên"
        placeholder="Họ tên"
        icon="♙"
        suffix="vnd"
      />

      <InputField label="Địa chỉ" />

      <div className="row" style={{ marginBottom: "10px" }}>
        <SelectField label="Đi từ" />
        <SelectField label="Đến" />
      </div>

      <RoundTrip />

      <SubmitButton />
    </div>
  );
}

function App() {
  return (
    <div
      className="container"
      style={{
        paddingTop: "15px",
        justifyItems: "center",
      }}
    >
      

      <BookingForm />
    </div>
  );
}

export default App;