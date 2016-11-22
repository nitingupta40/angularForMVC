using angularForMVC.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Mvc;

namespace angularForMVC.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult GetEmployees()
        {
            List<EmployeeVM> list = new List<EmployeeVM>()
            {
                new EmployeeVM() {
                    FullName = "No Name"
                },
                new EmployeeVM() {
                    FullName = "This is"
                }

            };

            var camalCaseFormatter = new JsonSerializerSettings();
            camalCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();
            var jsonResult = new ContentResult
            {
                Content = JsonConvert.SerializeObject(list, camalCaseFormatter),
                ContentType = "application/Json"
            };

            return jsonResult;


        }

        public ActionResult Create(EmployeeVM employee)
        {
            if (ModelState.IsValid)
            {
                return new HttpStatusCodeResult(HttpStatusCode.Created, "New Employee Added");
            }

            List<string> errors = new List<string>();
            errors.Add("Insert Failed.");
            if (!ModelState.IsValidField("Notes"))
                errors.Add("Notes Must Be 5 Char Long");


            return new HttpStatusCodeResult(HttpStatusCode.InternalServerError,
                String.Join("  ", errors));
        }
    }
}