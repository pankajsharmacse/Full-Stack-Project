package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/hello")
    public Map<String, Object> hello() {
        Map<String, Object> res = new HashMap<>();
        res.put("message", "Hello from Spring Boot!");
        res.put("timestamp", System.currentTimeMillis());
        return res;
    }

    @PostMapping("/echo")
    public Map<String, Object> echo(@RequestBody Map<String, Object> payload) {
        Map<String, Object> res = new HashMap<>();
        res.put("received", payload);
        res.put("status", "ok");
        return res;
    }
}
