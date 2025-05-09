# Vertex UI Microapp Research Project

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.

## Documentation

- [Vertex UI Docs on Microapp Architecture](https://github.com/SE-Sustainability-Business/vertex-ui/blob/microapp-architecture-research/docs/research/microapp.md)
- [NPM: Angular Architects Native Federation Package](https://www.npmjs.com/package/@angular-architects/native-federation)

## Project Structure

```
projects
├── container
├── microapp-a
├── microapp-b
├── microapp-c
└── shared-library-a
```

### Container

This is also called the "shell" application.  Its purpose is to be a central location for loading and orchestrating all other microapps.

### Microapps (A/B/C)

Each of these applications can be deployed/run independently of each other.  They are also able to be loaded remotely by the container app.

### Shared Libraries (A)

Shared libraries are included in one or more microapp, and potentially the container app.  They provide common utilities, assets, services, etc. needed for all areas of the application.  They may also contain framework dependencies.

