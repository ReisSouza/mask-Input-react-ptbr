import { useState } from 'react';
import { setMask } from 'react-input-mask-br';
import './App.css';

function App() {
  const [cpf, setCpf] = useState<string| undefined>();
  const [cnpj, setCnpj] = useState<string| undefined>();
  const [cpfOurCnpj, setCpfOurCnpj] = useState<string| undefined>();
  const [rg, setRg] = useState<string| undefined>();
  const [postalCode, setPostalCode] = useState<string| undefined>();
  const [phone, setPhone] = useState<string| undefined>();
  const [credCard, setCredCard] = useState<string| undefined>();

  return (
    <div className="container">
      <div className='wrapped-input' >
        <label htmlFor='cpf'>
          CPF
        </label>
        <input id="cpf" className='input' type="text" value={cpf} placeholder="000.000.000-00" onChange={(e) => setCpf(setMask({ type: 'cpf', value: e.target.value }))}/>
      </div>
      <div className='wrapped-input' >
        <label htmlFor='cpf'>
          CNPJ
        </label>
        <input id="cpf" className='input' type="text" value={cnpj} placeholder="00.000.000.0000-00" onChange={(e) => setCnpj(setMask({ type: 'cnpj', value: e.target.value }))}/>
      </div>
      <div className='wrapped-input' >
        <label htmlFor='cpf'>
          CPFORCNPJ
        </label>
        <input id="cpf" className='input' type="text" value={cpfOurCnpj} placeholder="000.000.000-00" onChange={(e) => setCpfOurCnpj(setMask({ type: 'cpfOurCnpj', value: e.target.value }))}/>
      </div>
      <div className='wrapped-input' >
        <label htmlFor='cpf'>
          RG
        </label>
        <input id="cpf" className='input' type="text" value={rg} placeholder="00.000.000-0" onChange={(e) => setRg(setMask({ type: 'rg', value: e.target.value }))}/>
      </div>
      <div className='wrapped-input' >
        <label htmlFor='cpf'>
          POSTAL CODE
        </label>
        <input id="cpf" className='input' type="text" value={postalCode} placeholder="00000-000" onChange={(e) => setPostalCode(setMask({ type: 'postalCode', value: e.target.value }))}/>
      </div>
      <div className='wrapped-input' >
        <label htmlFor='cpf'>
          PHONE
        </label>
        <input id="cpf" className='input' type="text" value={phone} placeholder="(00) 0 0000-0000" onChange={(e) => setPhone(setMask({ type: 'phone', value: e.target.value }))}/>
      </div>
      <div className='wrapped-input' >
        <label htmlFor='cpf'>
          PHONE
        </label>
        <input id="cpf" className='input' type="text" value={phone} placeholder="(00) 0 0000-0000" onChange={(e) => setPhone(setMask({ type: 'phone', value: e.target.value }))}/>
      </div>

    </div>
  );
}

export default App;
