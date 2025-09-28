# ioBroker Adapter Development with GitHub Copilot

**Version:** 0.4.0
**Template Source:** https://github.com/DrozmotiX/ioBroker-Copilot-Instructions

This file contains instructions and best practices for GitHub Copilot when working on ioBroker adapter development.

## Project Context

You are working on an ioBroker adapter. ioBroker is an integration platform for the Internet of Things, focused on building smart home and industrial IoT solutions. Adapters are plugins that connect ioBroker to external systems, devices, or services.

## Adapter-Specific Context
- **Adapter Name**: iqontrol  
- **Primary Function**: Fast Web-App for Visualization - A comprehensive visualization interface for ioBroker smart home systems
- **Key Features**: Web-based UI, device controls, theming, popup messages, custom widgets, responsive design
- **Target Users**: Smart home enthusiasts wanting modern web interfaces for their ioBroker installations
- **Technology Stack**: JavaScript, HTML5, CSS3, Web Components, CodeMirror for code editing
- **Configuration**: JSON-based device and view configuration, supports themes and customizations

[CUSTOMIZE: The iqontrol adapter is a visualization platform that creates modern web interfaces for ioBroker smart home systems. It focuses on providing intuitive touch-friendly controls, responsive design, and extensive customization options for managing IoT devices through a web browser.]

## Testing

### Unit Testing
- Use Jest as the primary testing framework for ioBroker adapters
- Create tests for all adapter main functions and helper methods
- Test error handling scenarios and edge cases
- Mock external API calls and hardware dependencies
- For adapters connecting to APIs/devices not reachable by internet, provide example data files to allow testing of functionality without live connections
- Example test structure:
  ```javascript
  describe('AdapterName', () => {
    let adapter;
    
    beforeEach(() => {
      // Setup test adapter instance
    });
    
    test('should initialize correctly', () => {
      // Test adapter initialization
    });
  });
  ```

### Integration Testing

**IMPORTANT**: Use the official `@iobroker/testing` framework for all integration tests. This is the ONLY correct way to test ioBroker adapters.

**Official Documentation**: https://github.com/ioBroker/testing

#### Framework Structure
Integration tests MUST follow this exact pattern:

```javascript
const path = require('path');
const { tests } = require('@iobroker/testing');

// Define test coordinates or configuration
const TEST_COORDINATES = '52.520008,13.404954'; // Berlin
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// Use tests.integration() with defineAdditionalTests
tests.integration(path.join(__dirname, '..'), {
    defineAdditionalTests({ suite }) {
        suite('Test adapter with specific configuration', (getHarness) => {
            let harness;

            before(() => {
                harness = getHarness();
            });

            it('should configure and start adapter', function () {
                return new Promise(async (resolve, reject) => {
                    try {
                        harness = getHarness();
                        
                        // Get adapter object using promisified pattern
                        const obj = await new Promise((res, rej) => {
                            harness.objects.getObject('system.adapter.your-adapter.0', (err, o) => {
                                if (err) return rej(err);
                                res(o);
                            });
                        });
                        
                        if (!obj) {
                            return reject(new Error('Adapter object not found'));
                        }

                        // Configure adapter properties
                        Object.assign(obj.native, {
                            position: TEST_COORDINATES,
                            createCurrently: true,
                            createHourly: true,
                            createDaily: true,
                            // Add other configuration as needed
                        });

                        // Set the updated configuration
                        harness.objects.setObject(obj._id, obj);

                        console.log('✅ Step 1: Configuration written, starting adapter...');
                        
                        // Start adapter and wait
                        await harness.startAdapterAndWait();
                        
                        console.log('✅ Step 2: Adapter started');

                        // Wait for adapter to process data
                        const waitMs = 15000;
                        await wait(waitMs);

                        console.log('🔍 Step 3: Checking states after adapter run...');
                        
                        // Verify state creation and values
                        const states = await harness.getExistingStates();
                        const stateIds = Object.keys(states);

                        console.log(`📊 Found ${stateIds.length} states`);

                        if (stateIds.length === 0) {
                            console.log('❌ No states found after adapter initialization');
                            return reject(new Error('No states found after initialization'));
                        }

                        // Test specific functionality
                        const connectionState = await harness.states.getStateAsync('your-adapter.0.info.connection');
                        
                        if (!connectionState || connectionState.val !== true) {
                            return reject(new Error('Adapter connection state not set correctly'));
                        }

                        console.log('✅ All tests passed!');
                        resolve();

                    } catch (error) {
                        console.error('❌ Test failed:', error.message);
                        reject(error);
                    }
                });
            }).timeout(60000);
        });
    }
});
```

#### Key Requirements

1. **Use Official Framework**: Only `@iobroker/testing` is valid for integration tests
2. **Proper Test Structure**: Always use `tests.integration()` with `defineAdditionalTests`
3. **Realistic Test Data**: Provide sample configurations that represent real-world usage
4. **State Verification**: Check that expected states are created and have correct values
5. **Timeout Management**: Set appropriate timeouts (minimum 60 seconds for complex adapters)
6. **Error Scenarios**: Test both success and failure conditions

#### Best Practices

- **Configuration Testing**: Test with multiple realistic configurations
- **State Management**: Verify state creation, updates, and cleanup
- **Event Handling**: Test adapter responses to state changes
- **Resource Cleanup**: Ensure proper cleanup in `after()` hooks
- **Logging Verification**: Check that appropriate log messages are generated

#### Example: Complete Integration Test

```javascript
const path = require('path');
const { tests } = require('@iobroker/testing');

tests.integration(path.join(__dirname, '..'), {
    defineAdditionalTests({ suite }) {
        suite('Configuration and Operation Tests', (getHarness) => {
            let harness;

            before(() => {
                harness = getHarness();
            });

            it('should handle basic configuration and create expected states', async function() {
                this.timeout(120000); // Increased timeout for complex operations
                
                try {
                    // Configure adapter with test settings
                    const config = {
                        serverPort: 8082,
                        path: '/iqontrol',
                        useHttps: false,
                        // Add other iqontrol-specific config
                    };

                    await harness.changeAdapterConfig('iqontrol', {
                        native: config
                    });

                    console.log('✅ Configuration applied, starting adapter...');

                    // Start and wait for adapter
                    await harness.startAdapterAndWait();

                    console.log('✅ Adapter started, waiting for initialization...');

                    // Wait for adapter to initialize
                    await new Promise(resolve => setTimeout(resolve, 10000));

                    // Verify expected states exist
                    const connectionState = await harness.states.getStateAsync('iqontrol.0.info.connection');
                    expect(connectionState).to.exist;
                    expect(connectionState.val).to.be.true;

                    console.log('✅ Integration test completed successfully');

                } catch (error) {
                    console.error('❌ Integration test failed:', error);
                    throw error;
                }
            });

            after(async () => {
                if (harness) {
                    await harness.stopAdapter();
                }
            });
        });
    }
});
```

## ioBroker Adapter Development Guidelines

### Core Patterns

#### Adapter Initialization
```javascript
class YourAdapter extends utils.Adapter {
    constructor(options = {}) {
        super({
            ...options,
            name: 'your-adapter',
        });
        
        this.on('ready', this.onReady.bind(this));
        this.on('stateChange', this.onStateChange.bind(this));
        this.on('unload', this.onUnload.bind(this));
    }
    
    async onReady() {
        // Set connection state
        await this.setStateAsync('info.connection', false, true);
        
        // Initialize your adapter logic
        await this.initializeAdapter();
    }
}
```

#### State Management
```javascript
// Create states with proper definitions
await this.setObjectNotExistsAsync('device.state', {
    type: 'state',
    common: {
        name: 'Device State',
        type: 'boolean',
        role: 'switch',
        read: true,
        write: true,
    },
    native: {},
});

// Set state values with acknowledgment
await this.setStateAsync('device.state', true, true);

// Subscribe to state changes
await this.subscribeStatesAsync('device.*');
```

#### Error Handling
```javascript
try {
    // Your adapter logic
    await this.someOperation();
} catch (error) {
    this.log.error(`Operation failed: ${error.message}`);
    await this.setStateAsync('info.connection', false, true);
}
```

#### Resource Cleanup
```javascript
async onUnload(callback) {
    try {
        // Clear timers
        if (this.updateTimer) {
            clearTimeout(this.updateTimer);
            this.updateTimer = undefined;
        }
        
        // Close connections
        if (this.connection) {
            await this.connection.close();
        }
        
        // Set connection state
        await this.setStateAsync('info.connection', false, true);
        
        callback();
    } catch (error) {
        callback();
    }
}
```

### Logging Best Practices

- **Error Level**: Critical issues, exceptions, connection failures
- **Warn Level**: Recoverable problems, configuration issues, deprecation warnings  
- **Info Level**: Important operational messages, startup/shutdown, major state changes
- **Debug Level**: Detailed operational information, API calls, data processing steps

```javascript
this.log.error('Critical failure in device communication');
this.log.warn('Configuration parameter deprecated, please update');
this.log.info('Successfully connected to external service');
this.log.debug('Processing data: ' + JSON.stringify(data));
```

## JSON-Config Development

For adapters using JSON-Config (Admin 5+), follow these patterns:

### Schema Definition
```json
{
    "type": "panel",
    "items": {
        "serverSettings": {
            "type": "panel",
            "label": "Server Settings",
            "items": {
                "port": {
                    "type": "number",
                    "label": "Port",
                    "min": 1024,
                    "max": 65535,
                    "default": 8082
                }
            }
        }
    }
}
```

### Custom Components
- Use `sm`, `md`, `lg`, `xl` for responsive sizing
- Implement proper validation with `validator` functions
- Provide meaningful help text with `help` properties
- Use `confirm` dialogs for destructive actions

## Web Development (for UI adapters like iqontrol)

### Frontend Architecture
```javascript
// Modern ES6+ patterns for client-side code
class DeviceControl {
    constructor(deviceId, config) {
        this.deviceId = deviceId;
        this.config = config;
        this.init();
    }
    
    async init() {
        await this.loadDeviceData();
        this.bindEvents();
        this.render();
    }
    
    async loadDeviceData() {
        try {
            const response = await fetch(`/api/device/${this.deviceId}`);
            this.data = await response.json();
        } catch (error) {
            console.error('Failed to load device data:', error);
        }
    }
}
```

### Responsive Design Patterns
```css
/* Mobile-first responsive design */
.device-control {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}

@media (min-width: 768px) {
    .device-control {
        flex-direction: row;
        padding: 1.5rem;
    }
}

/* Touch-friendly controls */
.button {
    min-height: 44px;
    min-width: 44px;
    touch-action: manipulation;
}
```

### WebSocket Communication
```javascript
class IoSocketClient {
    constructor(url) {
        this.socket = io(url);
        this.setupEventHandlers();
    }
    
    setupEventHandlers() {
        this.socket.on('stateChange', (data) => {
            this.updateUI(data);
        });
        
        this.socket.on('disconnect', () => {
            this.showConnectionError();
        });
    }
    
    setState(stateId, value) {
        this.socket.emit('setState', { id: stateId, val: value });
    }
}
```

## Code Style and Standards

- Follow JavaScript/TypeScript best practices
- Use async/await for asynchronous operations
- Implement proper resource cleanup in `unload()` method
- Use semantic versioning for adapter releases
- Include proper JSDoc comments for public methods

## CI/CD and Testing Integration

### GitHub Actions for API Testing
For adapters with external API dependencies, implement separate CI/CD jobs:

```yaml
# Tests API connectivity with demo credentials (runs separately)
demo-api-tests:
  if: contains(github.event.head_commit.message, '[skip ci]') == false
  
  runs-on: ubuntu-22.04
  
  steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Use Node.js 20.x
      uses: actions/setup-node@v4
      with:
        node-version: 20.x
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run demo API tests
      run: npm run test:integration-demo
```

### CI/CD Best Practices
- Run credential tests separately from main test suite
- Use ubuntu-22.04 for consistency
- Don't make credential tests required for deployment
- Provide clear failure messages for API connectivity issues
- Use appropriate timeouts for external API calls (120+ seconds)

### Package.json Script Integration
Add dedicated script for credential testing:
```json
{
  "scripts": {
    "test:integration-demo": "mocha test/integration-demo --exit"
  }
}
```

[CUSTOMIZE: For iqontrol specifically, testing should focus on web server functionality, WebSocket communication, device state management, and UI rendering. Consider testing different device types, view configurations, and responsive layouts.]

## Basic Development Guidelines
- Follow ioBroker adapter development patterns
- Use appropriate logging levels (error, warn, info, debug)
- Implement proper error handling and recovery
- Ensure clean resource cleanup in unload() method
- Test both success and failure scenarios
- Follow semantic versioning for releases

## Enhanced ioBroker Development Support

This file provides GitHub Copilot with comprehensive context for developing ioBroker adapters, including testing patterns, configuration management, and best practices specific to the ioBroker ecosystem.