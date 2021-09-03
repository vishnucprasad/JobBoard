import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const RejectedResumeList = () => {
  const resumes = [
    {
      id: "dgkjsvfbliuhblfuglshf1",
      name: "Vishnu C Prasad",
      location: "Western City, UK",
      imageLink:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAABm1BMVEX///8REiQ9PGYuLlTzs4f2u5EzIR0gFxDw8vHg4uEmJUQiIj4AAAA3N1va2tvzsYUNDh47GBYpKUspBgDgjDbTcRgAACwaGUrqoW7dk2IAABoAABcgAAAnAAAOGj4oKEmaYzkwMFERAAAaAAAmJk8AABPq7OsuLV1BQUzIyNEeHks4N2MoAAAtLFwxAAAsAACMjZRtbnbLyccsGBKwrq0lCQAnGRgTDwv0qXPsp3rim2z32cX77+b1wZ33z7P77OKenasREDSgl5aRYUaGTS22tb8ZGypsbHYpKjiHh4xeX2ibnKGSjIpxZmZMPTqCfnpDMjAmHRZcWFaHg4A8KidgQDF8VDypdVBsSTFPNSRwbWq+gVohFBeIWz3Qi128urm7kXSed17VmXDUo3+IZEz21LzZiFFqaoBERGR8fY86OlBiYIIHBUBjTExTUXZQUWNnUlJDIR8IBUJrR0bNtKG5dz3OeSdTQE1vOhzgl01CKzauYSrCXwCUUyrkiSJrQDPVg0S+Zh1XODTIbBhaKQyucEAHBDROT1c1NUFO7VJvAAAQuElEQVR4nO2ci1cT1xbGExIgwclEIIEwIBRIhhB8TGJEAygPJeSBaC2CDzRtb62A9VWrtvaq2Fbhz77nMe9zzkzAm5kJzedCIWGxzo+997f3OTOjz9dSSy211FJLLbXUUksttdRSSy211FJLLbXUUksttdRSSy219G9XmK/V8nne7WX83xQSc/nV62sXxsbGh4YucBy3diPPh9xe1VcqnFu9fnNo/MKF8+c7sDqBxjju21urOdHt1R1VuaW180MXFCIdGNTFMa5zbTXn9hoPqxC/dH183AylB+uUQ3c93zyB4/P3blKhCDDMdqsp2HLfrV0YYkDRwGBWcp33vJ+THeMWVHQwFLebNbdXbqPQvfEjgAFxt7ze4fKWZEwwkJF5t5duo9rQkcBA0DyejjesqswKrLPT0/a4dMRUhCH7zu3FW0g8iiuqZB6eIZcufA2Yh/1j7WsidvGW28tnShyz5LIB6+TcXj9Tll5fB5hnu/SqdYnZgnm2lV23LjFbMM+6x7o1lx3Y2KrbACxZZOI00BZ3EYoNdsNtAIZCpHcAmq2t6Y712xtXNzfvb25efXDnbgcYeTmOAjh2z20ChkQj2PTW9N3bDzbvP5y5dOlSAmoAKTHw8P7m1Y27HRe5i80BFtaDba1vbD5MyESJRKFQiAYLhZmZmQFVDzfvfMs1AxivA5veTMhMAKhdVjQIFY1CQBnuqo7MszWmA5u+CrEKKpIeTFa0gOAeaOnoWVfUR2wmkYi2m2UAQ2wgH3V9rOo2AUMa2PSdS4kgwUWABYOA7LYaMs9OHpp5bN1PFEguClhwZmBTrTLOq+dworp93pqhBYwGVhh4qIGF3SZgSY3Y+qUEhYsGFhxIfKuCub1+ppQZeHrjEi0TqWAzA3fUInN7/UwpG2jQxGiZSAUrDFxVwG66vX6mlG0L8A4aFxUsqrqHh48GlI3m1o/1gwVV9xjz7vmbckg1PUMtMTrYzIAMxi25vX6m8rItrlOmDiZYYUDegHp3A+3LyY3sNj0T6WDRgbsXvd2fwegxJrv9YcCCit97tz/7QuNKGzsM2MyGDObhI+7z8p6F7h0MsIS8cxlze/UWwh16epPuHQywgtyh19xevYVuIbCtTercwQTDHXrMq/15Fqz8+y08eNC5GGBRDMZ9D96fdZuC1CMUJUR2SLDgfQ5xoehdcZvDrHk5+37YghPV4SIGwbgf5C/m3SYx6bKy+JuHBgv+CMA6FMrLbpMYNafaxQ/THdOHBbuoBgwko7dC9ggsO4iO2/4zfiSwHyHTzEw0GH3kNotBMBPh6SjA6+g4z3B7C7DOAvgXHjMGg97KRRQwBNZ+t6PjsGCdF9ejMhgImdssBgU1sNtjtxlcLLDgXe5uUAUruM1iULuaiu23f2JxMcGCPylgM0GPReyynIvwHyYXGywISyyKM9FbNYb6czDB2IfZgwVxxABf1GNTFWrQwa8Ciw7A99vdJjFpzhqprohBuOic2yRm1UNmCxYNeo4L6IqFbdQFFo16brbHmrtiZYk2YFGA5cVwyZp/dPloYO2PvDX8kpo9Uh/zmslTdGzB5o8G5vVEtLZ9CzAP+4aiI4F5bd6g6coRwDw2+dJl4R5sMO97h2WRscGaoMSsiowJ1gwlZlVkLDCvzogmsTsZC8xjZ4lMHT4V3V5xnWL6IgPMY2ekbDF9kQXWFJ4IxbIPxtWW5rAOKFbIGGBNEzBmyOj3eTRPwHwsY6RHzO21Hkr0Xka9+61JepgiquVTwJrG6lXRyowEa4r9ikmU4yoCLNoc069RIXswbx782orsZkTEmpKLQmYE8+AFiHplJjM+tNOs8YKaY4NF25uYC+hykA7WjD5vlP7ikgbWXAMiXfMUsKY4brPVXMEMlmiy+ZChOfWRRgxWmPm5uX1D0VwhkcAP8UQR1sDAz8cjYvPRgvx0bQE/b3p8wIKFhO4Bb6BjAxaM6sESx8Q85gvIMhSwmcRxAfPNRuVH1uXH8xOzHn7Y41CaD2IymWs+FDouZL7LURUsKoZCTU6mB7gSlcEuh7DC4bAoNhkeP7nweDmkSH5xtoDAHsmvimFZyyvVSc/+70aqxMnlne1kpj/Tv2MGg4WGy0sJGJK40rfYt3hid2Vh0pP/qV1InFzYeTLRf2YimQwAJbdDBNncZbm8dFzh8O4JpOFM/y+ZJzsAzzvpyS/vPHk2cWZiaqoNaCqA1M8rDFog+JwKyytcuT4MNoJ+HSDY/dvPdxY8kJuhhWcTAAkxYWGwjFZkKtnTNTJg1UUM1hNQBfAy2wsuB24BBKrNKHl1j31msKXTY0vySzm1xCrDGCxgUqZ/wUUs/tmZNkLyyvp9ppCFz3afHsIJyquZKH7BXF1mMPADtl1LyEkiWvoim1TB8GPAT8929w6t+QwBC9f6iEzUUrJ/0iUuSrh0RbagRQyGbOlUd3dv79iqIWBhaZGeicovxw0ukRYuapGhkK2eg2Dj90R9wMTnJ6zAAhk3nvneYYHJuRgR9SELi90A7NS5XC7Ea2D8CZ3Z07LxsfNcIUYiqiHTFZkYFsOh2qnu3rG8WONrYaLEGFyBwC/Ou/7yhA1YRtKGj3AY/PWi+9QaCFJNl4llyxKDP2TZcbDHrEzUiiyky0UwWd04O3QLzL45zTrCz5lm71ouhphYWsjCIYOun4UR04snxw6zIk7nIs8uMbXIlo1gIBXXjWB5uxKDM6fDYAvsEqMVGUzHte5TvbyeS9yxKzHYDh0GsyixtraInEY+A9jL7tPjRrAua7N3pcisSkwJ2a+GIgOzYu9YTg/GW8xTbhVZuL8OMGORhWEfq+nBqvaZCDqZs8PHspV3qIa/o8/F3FB373hen4krjC2LQf3OdrIFqxJTySL6iNVOA7AlfcR268hEYEGOgj2xAcNkGV4Hlj8HwFZFjSu3aN2c5bA/cxTMOhOhoDPqti6h0BLcj93QwERUYtbhQkXmJJeNdyhB009VoVUIdl1XYpVh23AhMCfdg7XHNKPpti5gogLblqdaxPjRLhQuu5g5utu0nDvUEjNsXUIvINhLDUzZslibosOzh+XcoQPTFZnvJdxBn1LBROVUwJiOZPwcnT2e2YGRWxffWXTmodWYcirQYwe27RyXSEOJUHNRS8UhCMZpw2IfdS/WQyk55w71LfcsMqa5yMIITBsW84xBsYsIm4M7F9pAFTF9bS6yHD5+U4ZF86lAUg9mjKKDQxVtoDKDTckFopuo4PGbMiyKu4ZMzHzzSkYDPaDHCJZ0bqiimaIZTLGP37SJCoIpw+Jv+oAlA69jb2Swka5AV5chFx20RZMpQqYIC2zTCLYqg20OawFLvt2LxT5cw2Q9XT1mMMdsMWQKGB0MkyU3HqkTFQBThsUrvw+r1pHZiEHFd2UwIOOeOuPUXtNsigAqwgILvP1Dnagg2AsM9uadGrDk5xgG+zOJU5EA+8UpWzSbYgSJAJPt480s6s8vENipNQT223/VgL3d+yCDxV8h80ByxxbNkyIDTM7Fzyhkvr+6Edg6Anvzfli2jtEH38h6/x5VGQXMsWnRfDnCGuzVBxSydQR2ugMFLP5RycSeYZ2UEjO7x45DYOZJkQWGyUZjMGTiSwx2Ac5Ue3HV63tO6MQACzhli+a5wxosswdDFu5GYL2ncjBgn4ZZYCMYzOge/c5wiebtMxMMkSW/gSHjz2KwoRoMGC6xHgpYVxelyH51Zgwmts82YE8/gJDlzmGw8RqwxPhf2tQxohMLzKFNNHFlLBJ5wgDDM34s9oevpoDlxb14nH2yDZiek7bojN8T5wKRgBSgg+GQvY59mM0rYEuz8fifw6wjAeAdw9IwYYsLjoCZR+BIJLBsCXY1Fru0pNTYdz/H49eGWQeKwDsWlxcJMGfGYNLtk5NJRi4isrdgrnggR2zoWjyOS4zGBTNxcfILYYuO+D15LTOSETNWYKMAbO+0nIqf4vG/2YdTAOmL2EcUWcCJMZg3b8ZAKvqYYJAs8xqQ/Y5Hqn/icolRjxNhe+7zDZPu4cQYTHH7J75+K7Ak3Jfs4aMBEDBcYtSAYTDSFh3xe9LtAzsWYBG5yGL/wBtYYMDi75hXMTHYDmGLjsz3xIFHBLgxGwzlYgxXGaqw+N/MgI12ITCJtEUnxmDiVqNIctkODO0lf+8eQgGDJca4GoHBlglbdMTviUtjEVDaFmARuchir0+jgMU/DjOvHmEw/ou5yJLPG89FcfuIaAUGQzaK9sj/oIDF2RciejCYSE6LDlxiF4kLLRHQPq3A4IWyPRQyFLBP7IDJYL5d0hYbP9+Tx9uBxxjMImTygQ0KGNyy0LnwaA/AHhO26MB5Dnm8HZDswV5pYB/Z150VMGSLBvdwwO/Ja37AFK3BANmuBvbOOhMhGGmLDpznUNx+0h4MF5lcYqyAqWCTpC02vpGRbp8U7cDa0NYFg4ESY111HlHARBLsScPBiEWDEbgOsKcK2F/si85dChgeg438DQcjboSIPLMHi+BOhrsY82Y3Dew5Adbwuz3IOzwCO/ZgbXjrgkuMxdWjgZFjcMPv9iDv8ICmaA+GigxtWZg3rejAqovmImv4xoW8eRuaIgazIku+xWDv2Ld1jGhgpC02vJGRbQxNO3YRAyHDYOyAKUeKEIw8HWh4IyOfj0B+ZRuxtuRrCPbnMPsOIx2Yb9HsHg1vZEQbm3pSJ9gGBLs2zOTq0YMRttjwu/u2zQue2qkPbOotBHvHDpgBDNmioS9EGstlvvzc1jaxUB9YW2AvFv9kcUfYiB6MtMUGn8DxhHecmawT7MznGCgxNliXHmyZsMUGn8CRbewMXyfY1EYsfifJwjKBkacDDW5klJuNRA3Mush2Y/F3bK4eAxg+HdAXZIOvuBBtbAq7VR1gbRN7f1tkohGMtMUGNzKijU09rhts6vN7i0wcMYI9NttigxsZcRcVNsX6wF59ZHOpJSaDEacDhz5a5A+l7UDEqOQCfDmcGUWKWGp3tIepEfVCdF8Y/kT8eIj+O7YPt1IfdygJJ81KodeJl6nyW7ylCf3AFPrU8C2HW6nPf0zVAms2WYIJguEr+aM5hMFOpsFfpSJ+6UB5b7CynyqpXxX3BX+pcuBvEmEwYaUiDEqDqUH/YIqTikIqJQgpLp+v5rNVDvieX+C4Ax58SOmTNj/QK5JTsSiliuWsVObKUrZcPZCq2XR1n9/nuBWxIvGTpTTP7+fSfCntaMQEWuYbywN8i4C/DX0Cv8TvyGApyb+SzQ5msyscVxYkP5fN7qfSOb6crZZyXCVfO+BKIi8IjsarlK0cFIViMT1YEvxpaR/9WywDhpIAPyumKvvl/XKlLBWlSrHqlyorUlpaEfRgQqVSroA3ymkhVfZXU4Mr5X2QjAJfru7XuIPaZCpVCvNFZ71DKIPfa7a8n69ks/m0dJAHv3cpXVvhspWVbFmqlivZYjbrL1ernLRfqR5UV8Bqy9WUHswvVMtFSSiVqv5ipZKtAPp9oZqVYPrx2VpWqpXT4POUo2CDO2WQOFK6mq1I1dIKJClX09VySUqDKKxIB9VKUQKs8M1yuQa+uSqBzwaNYNmiUCpnhZKUTVW4rFQsHQj71fIgiLYgVVKprFTKctm0o2Aw2dL+0kHRnxZKJ8GHkAYuXSodpPYH00Kx5E+XgFWD18BnQqqUAq8d+NOYS+tjMMsGBfQB/qB3BeCSsIBTAvzcL3ixizGX9O+cPJpZLbBm0/8AM5swpi5TgSsAAAAASUVORK5CYII=",
      resumeLink: undefined,
      websiteLink: "https://vishnucprasad.in",
      skills: ["NodeJS", "ReactJS", "MongoDB"],
      jobDetails: {
        id: "dgkjsvfbliuhblfuglshf2",
        title: "Web Developer",
        designation: "Backend Developer",
        type: "Full time",
        salary: "$2000",
        workingDays: 20,
        employerName: "Vishnu C Prasad",
        companyName: "Nodesters",
        location: "Western City, UK",
      },
    },
    {
      id: "dgkjsvfbliuhblfuglshf3",
      name: "Vishnu C Prasad",
      location: "Western City, UK",
      imageLink:
        "data:image/png;base64,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",
      resumeLink: undefined,
      websiteLink: "https://vishnucprasad.in",
      skills: ["NodeJS", "ReactJS", "MongoDB"],
      jobDetails: {
        id: "dgkjsvfbliuhblfuglshf4",
        title: "Web Developer",
        designation: "Backend Developer",
        type: "Full time",
        salary: "$2000",
        workingDays: 20,
        employerName: "Vishnu C Prasad",
        companyName: "Nodesters",
        location: "Western City, UK",
      },
    },
    {
      id: "dgkjsvfbliuhblfuglshf5",
      name: "Vishnu C Prasad",
      location: "Western City, UK",
      imageLink:
        "data:image/png;base64,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",
      resumeLink: undefined,
      websiteLink: "https://vishnucprasad.in",
      skills: ["NodeJS", "ReactJS", "MongoDB"],
      jobDetails: {
        id: "dgkjsvfbliuhblfuglshf6",
        title: "Web Developer",
        designation: "Backend Developer",
        type: "Full time",
        salary: "$2000",
        workingDays: 20,
        employerName: "Vishnu C Prasad",
        companyName: "Nodesters",
        location: "Western City, UK",
      },
    },
  ];

  return (
    <div className="resume-list mt-4">
      <div className="card bg-primary shadow-soft border-light">
        <div className="card-header pb-0">
          <div className="text-uppercase d-md-flex mb-0">
            <div className="font-weight-bolder h6">Resumes</div>
            <div className="w-md-25 ml-auto">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text text-twitter">
                    <SearchIcon />
                  </span>
                </div>
                <input
                  className="form-control"
                  id="exampleInputIcon1"
                  placeholder="Search for resumes..."
                  type="text"
                  aria-label="Input with icon left"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card-body shadow-inset rounded m-3 px-3 pt-3 pb-0">
          <div className="scroll-70 px-2 pt-2 pb-0">
            {resumes.map((resume) => (
              <div key={resume.id} className="card shadow-soft rounded mb-4">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-9">
                      <Link
                        to={`/employer/rejected-requests/view/${resume.id}`}
                      >
                        <p className="text-twitter font-weight-bold text-uppercase">
                          {resume.jobDetails.type}
                        </p>
                        <div className="d-block d-md-flex text-center align-items-center">
                          <img
                            src={resume.imageLink}
                            alt=""
                            className="img-fluid rounded-circle resume-image mr-3"
                          />
                          <h4 className="font-weight-bold m-0">
                            {resume.name}
                          </h4>
                        </div>
                        <p className="font-weight-bold mt-3 mb-2">
                          <span className="mr-3">
                            <LocationOnIcon className="text-twitter" />
                            {resume.location}
                          </span>
                          <span className="mr-3">
                            {resume.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="badge badge-twitter font-weight-bolder mr-3"
                              >
                                {skill}
                              </span>
                            ))}
                          </span>
                          <span className="badge badge-twitter font-weight-bolder px-3">
                            {resume.title}
                          </span>
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-3">
                      <div className="d-flex align-items-center">
                        <div className="w-100">
                          <button className="btn btn-primary btn-sm btn-block text-twitter text-uppercase font-weight-bold mt-3">
                            Undo Rejection
                          </button>
                          <button className="btn btn-primary btn-sm btn-block text-danger text-uppercase font-weight-bold mt-3">
                            Delete Resume
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectedResumeList;