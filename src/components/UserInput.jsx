import { useState } from "react"


export default function UserInput({formData, onchange}) {

    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial Investment</label>
                    <input type="number" value={formData.initialInvestment} onChange={(event)=>onchange("initialInvestment", event.target.value)}/>
                </div>
            
                <div>
                    <label>Annual Investment</label>
                    <input type="number" value={formData.annualInvestment} onChange={(event)=>onchange("annualInvestment", event.target.value)}/>
                </div>
            </div>

            <div className="input-group">
                <div>
                    <label>Expected Return</label>
                    <input type="number" value={formData.expectedReturn} onChange={(event)=>onchange("expectedReturn", event.target.value)}/>
                </div>

                <div>
                    <label>Duration</label>
                    <input type="number" value={formData.duration} onChange={(event)=>onchange("duration", event.target.value)}/>
                </div>
            </div>
        </div>
    )
}